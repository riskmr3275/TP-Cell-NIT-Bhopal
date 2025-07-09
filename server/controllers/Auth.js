const bcrypt = require('bcryptjs');
const otpGenerate = require("otp-generator")
const jwt = require("jsonwebtoken")
const mailSender = require("../utils/mailSender")
const { otpMail } = require("../Mail/Template/Otpmail")
const { connect,pool,query } = require('../config/database');
const { AccoutCreate } = require("../Mail/Template/AccountCreation")
const { accountLogin } = require("../Mail/Template/accountLogin")
 
// +++++++++++++++++++++++++++++++++++Send Otp FUnction+++++++++++++++++++++++++++++++
exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    console.log("Received email:", email);

    try {
        // Check if the email is already registered
        const userCheckResult = await pool.query("SELECT COUNT(*) FROM users WHERE email = $1", [email]);
        const userCount = parseInt(userCheckResult.rows[0].count, 10);

        if (userCount > 0) {
            return res.status(200).json({
                success: false,
                message: "User Already Exists"
            });
        }

        // Generate and ensure OTP uniqueness
        let otp;
        let otpCount;
        do {
            otp = otpGenerate.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            });

            const otpCheckResult = await pool.query("SELECT COUNT(*) FROM otp_table WHERE otp = $1", [otp]);
            otpCount = parseInt(otpCheckResult.rows[0].count, 10);
        } while (otpCount > 0);

        console.log("Generated OTP:", otp);

        // Store OTP in the database
        await pool.query("INSERT INTO otp_table (email_id, otp) VALUES ($1, $2)", [email, otp]);

        // Send OTP email
        try {
            const mailResponse = await mailSender(email, "Verification OTP from TP Cell Manit", otpMail(otp));
            console.log("Email sent successfully:", mailResponse);
        } catch (error) {
            console.log("Error occurred while sending the email:", error);
        }

        res.status(200).json({
            success: true,
            message: "OTP Generated Successfully",
            otp
        });
    } catch (error) {
        console.error("Error generating OTP:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while generating OTP.",
            error: error.message
        });
    }
};


exports.signup = async (req, res) => {
    try {
        const {
            user_id,
            first_name,
            last_name,
            email,
            password,
            confirmPassword,
            accountType,
            otp
        } = req.body;
        console.log("Sinpup Data ",req.body)
        if (!first_name || !last_name || !email || !password || !confirmPassword || !accountType || !otp || !user_id) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Both passwords must be the same, please try again"
            });
        } 

        // Check if the user already exists
        const userCheckResult = await pool.query("SELECT COUNT(*) FROM users WHERE email = $1", [email]);
        const userCount = parseInt(userCheckResult.rows[0].count, 10);

        if (userCount > 0) {
            return res.status(400).json({
                success: false,
                message: "User is already registered"
            });
        }

        // Validate OTP
        const otpResult = await pool.query(
            "SELECT otp FROM otp_table WHERE email_id = $1 ORDER BY created_at DESC LIMIT 1",
            [email]
        );
        console.log("object,",otpResult)
        if (otpResult.rows.length === 0 || otp != otpResult.rows[0].otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate profile picture URL
        const profilePicUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${first_name} ${last_name}`;
 
        // Insert new user into the database
        await pool.query(
            "INSERT INTO users (user_id, name, email, password, account_type, photo_url) VALUES ($1, $2, $3, $4, $5, $6)",
            [user_id, `${first_name} ${last_name}`, email, hashedPassword, accountType, profilePicUrl]
        );

        // Fetch user details
        const userDetails = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        // Send a welcome email
        try {
            const mailResponse = await mailSender(email, "You're In! Welcome to Manit", AccountCreate(first_name));
            console.log("Email sent successfully:", mailResponse);
        } catch (error) {
            console.log("Error occurred while sending the email:", error);
        }

        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            student_Details: userDetails.rows[0]
        });
    } catch (error) {
        console.error("Error signing up:", error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again later",
            error: error.message
        });
    }
};
 
 
// Login function
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Received email:", email, password);

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check if the user exists
        const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: "User not registered. Please sign up first."
            });
        }

        const user = userResult.rows[0];
        console.log("User:", user);

        // Check if the password matches
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }

        // Generate JWT token
        const payload = {
            email: user.email,
            id: user.user_id,
            account_type: user.account_type
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

        // Create cookie options
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        // Send login activity email
        try {
            const mailResponse = await mailSender(user.email, "Login Activity", accountLogin(user.name, user.email));
            console.log("Email sent successfully:", mailResponse);
        } catch (error) {
            console.log("Error sending email:", error);
        }

        return res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "Logged in successfully"
        });

    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later.",
            error: error.message
        });
    }
};

exports.changePassword = async (req, res) => {
    try {
        console.log("Received request:", req.body);

        const { oldPassword, newPassword, confirmNewPassword } = req.body;
        const userId = req.user.id; // Assuming user ID is available in req.user

        // Validate input
        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({
                success: false,
                message: "Both passwords must be the same, please try again"
            });
        }

        // Get user detail for verification
        const userResult = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
        
        if (userResult.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const user = userResult.rows[0];

        // Check if the old password matches
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Old password does not match"
            });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the password
        await pool.query("UPDATE users SET password = $1 WHERE user_id = $2", [hashedPassword, userId]);

        return res.status(200).json({
            success: true,
            message: "Password changed successfully"
        });

    } catch (error) {
        console.error("Error in changePassword:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while changing the password",
            error: error.message
        });
    }
};


exports.getAllUser = async (req, res) => {
    try {
        // Query to get the total user count
        const result = await pool.query("SELECT COUNT(*) AS count FROM users");

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found"
            });
        }

        const userCount = result.rows[0].count;

        return res.status(200).json({
            success: true,
            message: "User count retrieved successfully",
            count: userCount
        });

    } catch (error) {
        console.error("Error in getAllUser:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while retrieving user count",
            error: error.message
        });
    }
};