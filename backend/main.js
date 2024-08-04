const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 8080;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurant_list',
  password: 'abc123', 
  port: 5432,
});

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(bodyParser.json());

// Get all restaurants
app.get('/api/restaurants', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM restaurants');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching restaurants:', err);
    res.status(500).send('Server error');
  }
});

// Get restaurant by id
app.get('/api/restaurants/:id', async (req, res) => {
  const { id } = req.params; // Extract the id from request parameters
  try {
    const result = await pool.query('SELECT * FROM restaurants WHERE id=$1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching restaurants:', err);
    res.status(500).send('Server error');
  }
});

// Create a new restaurant
app.post('/api/restaurants', async (req, res) => {
  const { name, location, rating, upload_date, cuisine } = req.body;
  console.log("Hi",rating);
  if (rating==null || rating=="") {
      try {
        const result = await pool.query(
          'INSERT INTO restaurants (name, location, upload_date, cuisine) VALUES ($1, $2, $3, $4) RETURNING *',
          [name, location, upload_date,cuisine]
        );
        res.json(result.rows[0]);
      } catch (err) {
        console.error('Error creating restaurant:', err);
        res.status(500).send('Server error');
      }
    }
  else try {
    const result = await pool.query(
      'INSERT INTO restaurants (name, location, rating, upload_date, cuisine) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, location, rating, upload_date, cuisine]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error creating restaurant:', err);
    res.status(500).send('Server error');
  }
});

// Update a restaurant
app.put('/api/restaurants/:id', async (req, res) => {
  const { id } = req.params;
  const { name, location, rating, upload_date, description, cuisine } = req.body;
  if (rating==null || rating=="")
    try {
    const result = await pool.query(
    'UPDATE restaurants SET name = $1, location = $2, upload_date= $3, description=$5, cuisine=$6 WHERE id = $4 RETURNING *',
    [name, location, upload_date, id, description, cuisine]
  );
  res.json(result.rows[0]);
} catch (err) {
  console.error('Error updating restaurant:', err);
  res.status(500).send('Server error');
}

  else try {
    const result = await pool.query(
      'UPDATE restaurants SET name = $1, location = $2, rating = $3, upload_date= $4, description=$6, cuisine=$7 WHERE id = $5 RETURNING *',
      [name, location, rating, upload_date, id, description, cuisine]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating restaurant:', err);
    res.status(500).send('Server error');
  }
});

// Delete a restaurant
app.delete('/api/restaurants/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM restaurants WHERE id = $1', [id]);
    res.send('Restaurant deleted');
  } catch (err) {
    console.error('Error deleting restaurant:', err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});