const express = require('express');
const mongoose = require('mongoose');
const books = require('./routes/books');
const authentication = require('./routes/users');
const path = require('path');
const app = express();
const allowCors = require('./api/cors')

mongoose.connect('mongodb+srv://qbathany:oQIsdlLzU1YsiTG8@cluster0.i1fenpo.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json()); 
app.use(allowCors);



app.use ('/api/books', books)
app.use ('/api/auth', authentication)
app.use ('/images', express(path.join(__dirname, 'images')));


  
module.exports = app;