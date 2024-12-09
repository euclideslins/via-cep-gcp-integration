const express = require('express');
const enderecoRoutes = require('./routes/endereco');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use('/api', enderecoRoutes);

module.exports = app;