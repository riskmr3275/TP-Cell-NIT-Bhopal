const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10, // Reduce pool size if not handling heavy traffic
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    ssl: {
        rejectUnauthorized: false
    }
});

// Handle connection errors
pool.on('error', (err) => {
    console.error('Unexpected PostgreSQL error', err);
});

// Function to connect to the database
const connect = async () => {
    try {
        const client = await pool.connect();
        console.log("PostgreSQL connected successfully");
        return client;
    } catch (error) {
        console.error("PostgreSQL connection failure:", error);
        throw error; // Avoid process termination, handle gracefully
    }
};

// Function to execute queries without manually connecting each time
const query = async (text, params) => {
    try {
        const result = await pool.query(text, params);
        return result.rows;
    } catch (error) {
        console.error("Database query error:", error);
        throw error;
    }
};

module.exports = { connect, query, pool };
