const express = require('express');
const mongooseinit = require("./db/mango-db");
const path = require('path');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user')
const mongoSanitize = require("express-mongo-sanitize");


const app = express(); // permet de creer l'appli express
mongooseinit()
// permet de ne plus avoir d'erreur cors 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  //protection injection sql
app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);
  
  app.use(express.json()); // permet de lire toutes les réponses en json avec express
  app.use('/api/sauces', sauceRoutes)
  app.use('/api/auth', userRoutes)
  app.use('/images', express.static(path.join(__dirname, 'images')));
  module.exports = app;