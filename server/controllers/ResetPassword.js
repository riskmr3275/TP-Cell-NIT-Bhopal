const { ResetPasswordLink } = require("../Mail/Template/ResetPasswordLink");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { pool } = require("../config/database");

exports.resetPasswordToken = async (req, res) => {
    try {
        const email = req.body.email;
        
        // Check existence of user
        const userQuery = "SELECT * FROM student_details WHERE s_email = $1";
        const userResult = await pool.query(userQuery, [email]);
        
        if (userResult.rows.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Your Account is not registered"
            });
        }

        // Generate token
        const token = crypto.randomUUID();
        const expirationTime = Date.now() + 5 * 60 * 1000;

        const updateQuery = "UPDATE users SET token = $1, reset_password_expires = $2 WHERE email = $3";
        await pool.query(updateQuery, [token, expirationTime, email]);

        const url = `http://localhost:4000/update-password/${token}`;
        await mailSender(email, "Reset password link", ResetPasswordLink(url));

        return res.status(200).json({
            success: true,
            message: "Email Sent successfully, please check email",
            token,
            url
        });
    } catch (error) {
        console.error("Error from the reset password", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while resetting the password",
            error: error.message
        });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { password, confirmPassword, token } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Both passwords must be the same"
            });
        }

        // Get user details from DB using token
        const tokenQuery = "SELECT * FROM users WHERE token = $1";
        const tokenResult = await pool.query(tokenQuery, [token]);
        const userDetails = tokenResult.rows[0];

        if (!userDetails) {
            return res.status(400).json({
                success: false,
                message: "Token is invalid"
            });
        }

        if (userDetails.reset_password_expires < Date.now()) {
            return res.status(400).json({
                success: false,
                message: "Token has expired, please generate it again"
            });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Update password in database
        const updatePasswordQuery = "UPDATE users SET password = $1, token = NULL, reset_password_expires = NULL WHERE token = $2";
        await pool.query(updatePasswordQuery, [hashedPassword, token]);

        await mailSender(userDetails.email, "Your Password is reset", passwordSuccess(userDetails.first_name, userDetails.email));

        return res.status(200).json({
            success: true,
            message: "Password reset successfully"
        });
    } catch (error) { 
        console.error("Error occurred in resetPassword", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while resetting the password",
            error: error.message
        });
    }
};
