const { uploadMediaToCloudinary } = require("../utils/mediaUploader");
const mailSender = require("../utils/mailSender");
const { ProfilePicUpdate } = require("../Mail/Template/ProfilePicUpdate");
const { pool } = require("../config/database");

// +++++++++++++++Profile update ++++++++++++++++++++++++++++++++++++++++++++++++++
exports.updateProfile = async (req, res) => {
    try {
        const { s_dob = "", s_contact = "", s_city = "", s_state = "", gender = "", about = "" } = req.body;
        const id = req.user.id;

        const client = await pool.connect();
        const userQuery = "SELECT * FROM student_details WHERE s_id = $1";
        const userResult = await client.query(userQuery, [id]);

        if (userResult.rows.length === 0) {
            client.release();
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const updateQuery = `
            UPDATE student_details
            SET s_dob = $1, s_contact = $2, s_city = $3, s_state = $4, gender = $5, about = $6
            WHERE s_id = $7`;
        await client.query(updateQuery, [s_dob, s_contact, s_city, s_state, gender, about, id]);
        client.release();

        return res.status(200).json({ success: true, message: "Profile updated successfully", User: id, additionalDetails: req.body });
    } catch (error) {
        console.error("Error updating profile: ", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// ++++++++++++++Delete Account++++++++++++++++++++++++++++++++++++
exports.deleteAccount = async (req, res) => {
    try {
        const id = req.body.id || req.user.id;
        const client = await pool.connect();

        const userQuery = "SELECT * FROM student_details WHERE s_id = $1";
        const userResult = await client.query(userQuery, [id]);
        if (userResult.rows.length === 0) {
            client.release();
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const deleteQuery = "DELETE FROM student_details WHERE s_id = $1";
        await client.query(deleteQuery, [id]);
        client.release();

        return res.status(200).json({ success: true, message: "Account deleted successfully" });
    } catch (error) {
        console.error("Error deleting account: ", error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// ++++++++++++++Get All User Details++++++++++++++++++++++++++++++++++++++++++++++
exports.getAllUserDetails = async (req, res) => {
    try {
        const id = req.user.id;
        const client = await pool.connect();

        const userQuery = "SELECT * FROM student_details WHERE s_id = $1";
        const userResult = await client.query(userQuery, [id]);
        client.release();

        if (userResult.rows.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, message: "User details fetched successfully", data: userResult.rows[0] });
    } catch (error) {
        console.error("Error fetching user details: ", error);
        return res.status(500).json({ success: false, message: "User not found" });
    }
};

// ++++++++++++++Update Display Picture++++++++++++++++++++++++++++++++++++++++++++++
exports.updateDisplayPicture = async (req, res) => {
    try {
        const imageUrl = req.files.displayPicture;
        const id = req.user.id;

        if (!imageUrl || !id) {
            return res.status(400).json({ success: false, message: "Please upload the image or all fields are required." });
        }

        const client = await pool.connect();
        const userQuery = "SELECT * FROM users WHERE user_id = $1";
        const userResult = await client.query(userQuery, [id]);

        if (userResult.rows.length === 0) {
            client.release();
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const finalImageUrl = await uploadMediaToCloudinary(imageUrl, process.env.FOLDER_NAME, 1000, 1000);
        const updateQuery = "UPDATE users SET photo_url = $1 WHERE user_id = $2";
        await client.query(updateQuery, [finalImageUrl.secure_url, id]);
        client.release();

        await mailSender(req.user.email, "Update Successfully", ProfilePicUpdate());
        return res.status(200).json({ success: true, message: "Image updated successfully", imageUrl: finalImageUrl.secure_url });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Can't upload image right now, try again later.", error: error.message });
    }
};
