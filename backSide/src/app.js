const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

module.exports = app;