const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Connect mongoose to Atlas or your local MongoDB server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pokemon', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Bring in routes to the server
app.use(routes);

app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}!`);
});
