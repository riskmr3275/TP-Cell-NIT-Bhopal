// const { connect } = require('../config/database');
// const poolPromise = connect();
const { connect,pool,query } = require('../config/database');


// const { pool } = require('../config/database');

exports.addGap = async (req, res) => {
    try {
        const userId = req.user.id;
        const { gap_duration, reason } = req.body;

        const result = await pool.query(
            `INSERT INTO academic_gaps (user_id, gap_duration, reason) 
             VALUES ($1, $2, $3) RETURNING id;`,
            [userId, gap_duration, reason]
        );

        const insertId = result.rows[0].id;

        res.status(201).json({ id: insertId, userId, gap_duration, reason });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getGapById = async (req, res) => {
    try {
        const { gap_id } = req.params;

        const result = await pool.query(
            `SELECT * FROM academic_gaps WHERE id = $1;`,
            [gap_id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Gap not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateGapById = async (req, res) => {
    try {
        const { gap_id } = req.params;
        const { gap_duration, reason } = req.body;

        const result = await pool.query(
            `UPDATE academic_gaps 
             SET gap_duration = $1, reason = $2 
             WHERE id = $3 RETURNING *;`,
            [gap_duration, reason, gap_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Gap not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteGapById = async (req, res) => {
    try {
        const { gap_id } = req.params;

        const result = await pool.query(
            `DELETE FROM academic_gaps WHERE id = $1 RETURNING id;`,
            [gap_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Gap not found' });
        }

        res.status(200).json({ message: 'Gap deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllGaps = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM academic_gaps;`);

        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
