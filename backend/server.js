const express = require('express');
const {Pool} = require('pg');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
  try {
    // Example query to select data from a "projects" table
    const {rows} = await pool.query('SELECT * FROM projects');
    res.json(rows); // Send retrieved data as JSON response
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
