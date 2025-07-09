// const { connect } = require('../config/database');
// const poolPromise = connect(); // Assuming this returns a connection pool
const { uploadMediaToCloudinary } = require("../utils/mediaUploader");
const { connect,pool,query } = require('../config/database');

// Upload Resume Route
exports.uploadResume = async (req, res) => {
    let connection;
    try {
        const resumeFile = req.file; // Handle file uploaded by multer
        const user_id = req.user.id;

        // Validate inputs
        if (!resumeFile || !user_id) {
            return res.status(400).json({ 
                success: false,
                message: "Please upload the resume or provide all required fields.",
            });
        }

        // Fetch user details
        connection = await poolPromise;
        const [userRows] = await connection.execute('SELECT * FROM users WHERE user_id = ?', [user_id]);

        if (userRows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        // Upload Resume to Cloudinary
        const finalResumeUrl = await uploadMediaToCloudinary(resumeFile.path, process.env.FOLDER_NAME); // Use resumeFile.path

        // Update resume in the database
        const updateUserQuery = `
            UPDATE curr_academics
            SET resume = ?
            WHERE user_id = ?`;

        const [updateRow] = await connection.execute(updateUserQuery, [finalResumeUrl.secure_url, user_id]);

        if (updateRow.affectedRows === 0) {
            return res.status(500).json({
                success: false,
                message: "Failed to upload the resume. Please try again later.",
            });
        }

        await connection.end();

        return res.status(201).json({
            success: true,
            message: "Resume uploaded successfully.",
            resumeUrl: finalResumeUrl.secure_url,
        });
    } catch (error) {
        console.error("Error uploading resume:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to upload resume. Please try again later.",
            error: error.message,
        });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// Update Resume Route
exports.updateResume = async (req, res) => {
    let connection;
    try {
        const resumeFile = req.file;
        const userId = req.user.id;

        // Validate inputs
        if (!resumeFile || !userId) {
            return res.status(400).json({
                success: false,
                message: "Please upload the resume or provide all required fields.",
            });
        }

        connection = await poolPromise;
        const [userRows] = await connection.execute('SELECT * FROM users WHERE user_id = ?', [userId]);

        if (userRows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        // Upload Resume to Cloudinary
        const finalResumeUrl = await uploadMediaToCloudinary(resumeFile.path, process.env.FOLDER_NAME);

        // Update resume in the database
        const updateUserQuery = `
            UPDATE curr_academics
            SET resume = ?
            WHERE user_id = ?`;

        const [updateRow] = await connection.execute(updateUserQuery, [finalResumeUrl.secure_url, userId]);

        if (updateRow.affectedRows === 0) {
            return res.status(500).json({
                success: false,
                message: "Cannot update resume right now. Please try again later.",
            });
        }
      
        return res.status(200).json({
            success: true,
            message: "Resume updated successfully.",
            resumeUrl: finalResumeUrl.secure_url,
        });
    } catch (error) {
        console.error("Error updating resume:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update resume. Please try again later.",
        });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// Add Current Academics Route
exports.addCurrAcademics = async (req, res) => {
    let connection;
    try {
        const user_id = req.user.id;
        const { degree, branch, sgpa, cgpa, backlogs } = req.body;
        const resumeFile = req.file; // Handle file uploaded by multer

        // Validate inputs
        if (!degree || !branch || !sgpa || !cgpa || backlogs === undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        connection = await poolPromise;
        const [userRows] = await connection.execute('SELECT * FROM users WHERE user_id = ?', [user_id]);

        if (userRows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        // Upload Resume to Cloudinary
        let finalResumeUrl = null;
        if (resumeFile) {
            finalResumeUrl = await uploadMediaToCloudinary(resumeFile.path, process.env.FOLDER_NAME);
        }

        const [result] = await connection.execute(
            'INSERT INTO curr_academics (user_id, degree, branch, sgpa, cgpa, backlogs, resume) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [user_id, degree, branch, sgpa, cgpa, backlogs, finalResumeUrl ? finalResumeUrl.secure_url : null]
        );

        if (result.affectedRows === 0) {
            return res.status(500).json({
                success: false,
                message: "Cannot add academic record right now. Please try again later.",
            });
        }

        

        return res.status(201).json({
            success: true,
            message: "Academic record created successfully.",
            academic_id: result.insertId,
        });
    } catch (error) {
        console.error("Error creating academic record:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to create academic record. Please try again later.",
        });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// Get All Academics Route   
exports.getAllCurrAcademics = async (req, res) => {
    let connection;
    try {
        const user_id = req.user.id;

        connection = await poolPromise;
        const [records] = await connection.execute('SELECT * FROM curr_academics WHERE user_id = ?', [user_id]);

        await connection.end();

        if (records.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No academic records found.",
            });
        }

        return res.status(200).json({
            success: true,
            records,
        });
    } catch (error) {
        console.error("Error fetching academic records:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch academic records. Please try again later.",
        });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// Update Academic Record by ID
exports.updateCurrAcademicsById = async (req, res) => {
    let connection;
    try {
        const user_id = req.user.id;
        const { degree, branch, sgpa, cgpa, backlogs } = req.body;
        const resumeFile = req.file;

        connection = await poolPromise;

        let finalResumeUrl = null;
        if (resumeFile) {
            finalResumeUrl = await uploadMediaToCloudinary(resumeFile.path, process.env.FOLDER_NAME);
        }

        const [result] = await connection.execute(
            'UPDATE curr_academics SET degree = ?, branch = ?, sgpa = ?, cgpa = ?, backlogs = ?, resume = ? WHERE user_id = ?',
            [degree, branch, sgpa, cgpa, backlogs, finalResumeUrl ? finalResumeUrl.secure_url : null, user_id]
        );

        if (result.affectedRows === 0) {
            return res.status(500).json({
                success: false,
                message: "Cannot update academic record right now. Please try again later.",
            });
        }

        

        return res.status(200).json({
            success: true,
            message: "Academic record updated successfully.",
        });
    } catch (error) {
        console.error("Error updating academic record:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to update academic record. Please try again later.",
        });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

// Delete Academic Record by ID
exports.deleteCurrAcademicsById = async (req, res) => {
    let connection;
    try {
        const user_id = req.user.id;

        connection = await poolPromise;
        const [result] = await connection.execute('DELETE FROM curr_academics WHERE user_id = ?', [user_id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "No record found to delete.",
            });
        }

        await connection.end();

        return res.status(200).json({
            success: true,
            message: "Academic record deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting academic record:",error);
        return res.status(500).json({
            success: false,
            message: "Failed to delete academic record. Please try again later.",
        });
    }
}
