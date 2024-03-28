const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const appRoute = require('./routes/route.js')
const PORT = process.env.PORT || 3000;
const MONGO_URl = process.env.MONGO_URl || 'mongodb://0.0.0.0:27017/mydatabase';

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('connected', () => {
    console.log('Connected to database');
});



/** routes */

app.use('/api',appRoute);

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});






