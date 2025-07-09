const { Pool } = require('pg');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});

// Handle idle client errors (very important!)
pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
});

// Connect manually — use only when needed (e.g., for transactions)
const connect = async () => {
  const client = await pool.connect();
  console.log('PostgreSQL connected successfully');

  // Handle client-level errors
  client.on('error', (err) => {
    console.error('PostgreSQL client error:', err);
  });

  return client;
};

// Safe and preferred for most use cases
const query = async (text, params) => {
  try {
    const result = await pool.query(text, params);
    return result.rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

// Global fallback for safety
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

module.exports = { connect, query, pool };
