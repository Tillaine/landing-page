require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
const app = express();
const detailsRoutes = require('./routes/detailsRoutes');

app.use(cors());
app.use(express.json());
app.use(express.json('dev'));
app.use(express.static('client/dist'));

app.use('/api/details', detailsRoutes);

const PORT = process.env.eslintrcPORT || 3004;
console.log(process.env.PORT);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
