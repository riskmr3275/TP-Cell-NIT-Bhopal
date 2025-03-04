// const { connect } = require('../config/database');
const { connect,pool,query } = require('../config/database');


// Apply for a job
// Apply for a job


// Apply for a job
const applyJob = async (req, res) => {
    const student_id = req.user.id;
    console.log("student_id", student_id);

    const { job_id } = req.body;
    try {
        const { rows } = await pool.query('SELECT * FROM applications WHERE job_id = $1 AND student_id = $2', [job_id, student_id]);
        if (rows.length > 0) {
            return res.status(400).json({ success: false, message: 'You have already applied for this job' });
        }
        const result = await pool.query('INSERT INTO applications (job_id, student_id) VALUES ($1, $2) RETURNING application_id', [job_id, student_id]);
        
        res.status(201).json({ success: true, message: 'Application submitted successfully', applicationId: result.rows[0].application_id });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error applying for job', error: error.message });
    }
};

// Delete an application by ID
const deleteApplyJobById = async (req, res) => {
    const { application_id } = req.body;
    try {
        await pool.query('DELETE FROM applications WHERE application_id = $1', [application_id]);
        res.status(200).json({ success: true, message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting application', error: error.message });
    }
};

// Get all applications for a student
const getAllApplyJobs = async (req, res) => {
    const student_id = req.user.id;
    try {
        const { rows } = await pool.query(`
            SELECT ap.application_id, ap.student_id, jp.*, c.* 
            FROM applications AS ap 
            INNER JOIN job_postings AS jp ON ap.job_id = jp.job_id 
            INNER JOIN companies AS c ON jp.company_id = c.company_id 
            WHERE ap.student_id = $1`, [student_id]);
        
        res.status(200).json({ success: true, rows: rows, message: 'Applications retrieved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving applications', error: error.message });
    }
};

module.exports = {
    applyJob,
    deleteApplyJobById,
    getAllApplyJobs
};
