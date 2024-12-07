const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const routes = require('./routes/v1');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res) => {
  return res.status(res.code).json({
    code: httpStatus.NOT_FOUND,
    message: 'Not found',
  });
});
app.listen(3000, () => {
  console.log(`Server running in on PORT 3000}`);
});

module.exports = app;
