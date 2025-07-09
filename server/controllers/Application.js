const { connect,pool,query } = require('../config/database');

   
// Get all applications
exports.getAllApplications = async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) AS count FROM applications');
        res.status(200).json({
            success: true,
            count: result.rows[0].count,
            message: 'Applications retrieved successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving applications',
            error: error.message
        });
    }
};   

// Get all interview schedules
exports.getAllInterviewSchedule = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT ps.rounds, ps.date, c.company_name, us.name AS SPOC, js.job_title 
            FROM placement_schedules AS ps  
            JOIN companies AS c ON ps.company_id = c.company_id 
            JOIN users AS us ON us.user_id = ps.coordinator_id 
            JOIN job_postings AS js ON js.company_id = ps.company_id
        `);
        res.status(200).json({
            success: true,
            data: result.rows,
            message: 'Fetched all data successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving interview schedules',
            error: error.message
        });
    }
};

// Get applications for a specific coordinator
exports.applicationForCord = async (req, res) => {
    const userId = req.user.id;
    const { company_id } = req.body;
    
    try {
        const result = await pool.query(`
            SELECT jb.*, cmp.company_name 
            FROM job_postings AS jb 
            INNER JOIN companies AS cmp ON cmp.company_id = jb.company_id 
            WHERE jb.user_id = $1 AND jb.company_id = $2
        `, [userId, company_id]);

        res.status(200).json({
            success: true,
            data: result.rows,
            message: 'Fetched all data successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving applications',
            error: error.message
        });
    }
};

// Get all applications by job ID
exports.getAllApplicationsByJobId = async (req, res) => {
    const { id } = req.body;

    try {
        const result = await pool.query(`
            SELECT ap.*, us.* 
            FROM applications AS ap 
            INNER JOIN users AS us ON ap.student_id = us.user_id 
            WHERE ap.job_id = $1
        `, [id]);

        res.status(200).json({
            success: true,
            data: result.rows,
            message: 'Fetched all data successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving applications',
            error: error.message
        });
    }
};