const { connect } = require('../config/database');

   
exports.getAllAplication= async (req, res) => {
    try {
        let connection = await connect();
        const [count] = await connection.execute('SELECT COUNT(*) AS count FROM applications');
        await connection.end();
        res.status(200).json({ success: true, count: count[0].count, message: 'Applications retrieved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving applications', error:error.message });
    } 
}   // Get all applications 


exports.getAllInterviewSchedule = async (req, res) => {
    const { application_id, interview_date, interview_time } = req.body;
    let connection;
    try {        
        connection = await connect();
        const [results]=await connection.execute("SELECT ps.rounds,ps.date, c.company_name, us.name as SPOC ,js.job_title FROM placement_schedules AS ps  JOIN companies AS c ON ps.company_id = c.company_id JOIN users AS us ON us.user_id = ps.coordinator_id JOIN job_postings AS js ON js.company_id = ps.company_id;");
        await connection.end(); 
        res.status(200).json({ success: true, data:results,message: "FEtch all data success"});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error scheduling interview', error });
    }
}   


// Schedule an interview
exports.applicationForCord = async (req, res) => {
    const userId = req.user.id;
    const { company_id } = req.body;
    let connection;
    try {        
        connection = await connect();
        const [results]=await connection.execute("SELECT jb.*, cmp.company_name FROM job_postings AS jb INNER JOIN companies AS cmp ON cmp.company_id = jb.company_id WHERE jb.user_id = ? AND jb.company_id = ?",[userId,company_id]);
        await connection.end(); 
        res.status(200).json({ success: true, data:results,message: "Fetch all data success"});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error scheduling interview', error });
    }
}   // Schedule an interview



exports.getAllAplicationsByJobId = async (req, res) => {
    const {id}  = req.body;  // Get company_id from the request body
    let connection;
    try {
        connection = await connect();  // Establish a connection to the database
        const [results] = await connection.execute("SELECT ap.*, us.* FROM applications AS ap INNER JOIN users AS us ON ap.student_id = us.user_id WHERE ap.job_id = ?", [id]);
        await connection.end();  // Close the connection
        res.status(200).json({
            success: true,
            data: results,
            message: "Fetch all data success"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving applications',
            error
        });
    }
};