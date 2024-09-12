import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3305,  
  connectionLimit: 20,
  connectTimeout: 30000
});


async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log('Connected to the database successfully!');
  } catch (err) {
    console.error('Failed to connect to the database:', err);
  } finally {
    if (conn) conn.end();
  }
}

testConnection();

export default pool;
