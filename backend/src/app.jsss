require('dotenv').config();
const express = require('express');
const cors = require('cors');
const libraryRoutes = require('./routes/library');
const liveTvRoutes = require('./routes/liveTv');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/library', libraryRoutes);
app.use('/api/live-tv', liveTvRoutes);

app.get('/health', (req, res) => res.send('OK'));

module.exports = app;
