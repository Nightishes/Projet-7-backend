const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const books = require('./routes/books');
const authentication = require('./routes/users');


const app = express();

mongoose.connect('mongodb+srv://qbathany:oQIsdlLzU1YsiTG8@cluster0.i1fenpo.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json()); 



app.use ('/api/books', books)
app.use ('/api/auth', authentication)
app.use('/images', express.static(path.join(__dirname, 'images')));


  
export default app;