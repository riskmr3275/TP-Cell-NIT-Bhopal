// const { connect } = require('../config/database');
// const poolPromise = connect();

const { connect,pool,query } = require('../config/database');
// GET all job listings
// const { pool } = require('../config/database');

// GET all job listings
exports.getAllJobListings = async (req, res) => {
    try {
        const query = `
            SELECT jp.*, us.*, c.* 
            FROM job_postings AS jp 
            INNER JOIN users AS us ON jp.user_id = us.user_id 
            INNER JOIN companies AS c ON jp.company_id = c.company_id`;
        const { rows } = await pool.query(query);
        res.status(200).json({
            success: true,
            message: "Job listings retrieved successfully",
            data: rows
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error retrieving job listings",
            error: err.message
        });
    }
};

// GET job count
exports.getJob = async (req, res) => {
    try {
        const query = 'SELECT COUNT(*) AS count FROM job_postings';
        const { rows } = await pool.query(query);
        res.status(200).json({
            success: true,
            message: "Job count retrieved successfully",
            count: rows[0].count
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error retrieving job count",
            error: err.message
        });
    }
};

// GET a specific job listing by ID
exports.getJobListingById = async (req, res) => {
    const jobId = req.query.id;
    console.log("mfh");
    
    try {
        const query = `
            SELECT jp.*, c.* FROM job_postings AS jp 
            INNER JOIN companies AS c ON jp.company_id = c.company_id 
            WHERE jp.job_id = $1`;
        const { rows } = await pool.query(query, [jobId]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Job listing not found' });
        }
        res.status(200).json({ success: true, message: "Job listing retrieved successfully", data: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error retrieving job listing", error: err.message });
    }
};

// POST a new job listing
exports.postJoblistings = async (req, res) => {
    const user_id = req.user.id;
    const { company_id } = req.body;
    console.log("mohti")
    console.log(company_id)
        const { job_title, job_description, eligibility, salary, location, application_deadline, application_post_date } = req.body;

    try {
        const query = `
            INSERT INTO job_postings (user_id, job_title, job_description, eligibility, salary, location, application_deadline, application_post_date, company_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
        const values = [user_id, job_title, job_description, eligibility, salary, location, application_deadline, application_post_date, company_id];
        const { rows } = await pool.query(query, values);
        res.status(201).json({ success: true, message: "Job listing created successfully", data: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error creating job listing", error: err.message });
    }
};

// UPDATE a job listing by ID
exports.updateJobListingById = async (req, res) => {
    const jobId = req.params.id;
    const updatedJobListing = req.body;
    const keys = Object.keys(updatedJobListing);
    const values = Object.values(updatedJobListing);
    
    if (keys.length === 0) {
        return res.status(400).json({ success: false, message: "No update fields provided" });
    }
    
    const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
    values.push(jobId);
    
    const query = `UPDATE job_postings SET ${setClause} WHERE job_id = $${values.length} RETURNING *`;
    
    try {
        const { rows } = await pool.query(query, values);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Job listing not found' });
        }
        res.status(200).json({ success: true, message: "Job listing updated successfully", data: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error updating job listing", error: err.message });
    }
};

// DELETE a job listing
exports.deleteJobListingById = async (req, res) => {
    const jobId = req.params.id;
    try {
        const query = 'DELETE FROM job_postings WHERE job_id = $1 RETURNING *';
        const { rows } = await pool.query(query, [jobId]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Job listing not found' });
        }
        res.status(200).json({ success: true, message: "Job listing deleted successfully", data: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error deleting job listing", error: err.message });
    }
};




