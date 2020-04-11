require('newrelic')
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const responseTime = require('response-time')
// var compression = require('compression')



// compress all responses

const cors = require('cors');
const app = express();
// create and connect redis client to local instance.
const detailsRoutes = require('./routes/detailsRoutes');


// use response-time as a middleware
app.use(responseTime());

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(compression())

app.use(express.json('dev'));
app.use(express.static('client/dist'));

app.use('/api/details', detailsRoutes);



const PORT = process.env.eslintrcPORT || 3004;
console.log(process.env.PORT);

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
