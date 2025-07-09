const { pool } = require('../config/database');

// Get total count of companies
exports.getAllCompany = async (req, res) => {
    try {
        const query = 'SELECT COUNT(*) AS count FROM companies';
        const result = await pool.query(query);
        res.status(200).json({ success: true, count: result.rows[0].count, message: 'Companies retrieved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving companies', error: error.message });
    }
};

// Get all companies for a specific coordinator
exports.getAllCompanyDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        const query = 'SELECT * FROM companies WHERE coordinator_id = $1';
        const result = await pool.query(query, [userId]);
        res.status(200).json({ success: true, result: result.rows, message: 'Companies Data retrieved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving companies data', error: error.message });
    }
};

// Add a new company
exports.addCompanyDetails = async (req, res) => {
    try {
        console.log("Hello from add company", req.body);
        
        const { company_name, industry, website, address, company_description } = req.body;
        const userId = req.user.id;
        
        if (!company_name || !industry || !website || !address || !company_description) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const query = `
            INSERT INTO companies 
            (company_name, industry, website, address, company_description, coordinator_id) 
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING *`;
        const values = [company_name, industry, website, address, company_description, userId];

        const result = await pool.query(query, values);
        console.log('Company added successfully');

        res.status(200).json({ success: true, result: result.rows[0], message: 'Company added successfully' });
    } catch (error) {
        console.error('Error inserting company:', error);
        res.status(500).json({ success: false, message: 'Error adding company', error: error.message });
    }
};
