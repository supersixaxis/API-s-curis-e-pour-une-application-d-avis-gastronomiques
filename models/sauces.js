const mongoose = require('mongoose');

// /!\ L'ID EST CREE AUTOMATIQUEMENT PAR MANGO DB PAS BESOIN DE LE METTRE DANS LE SCHEMA
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: {type: String, required:true}, // fabricant de la sauce
    description: { type: String, required: true },
    mainPepper: {type: String, required:true},
    imageUrl: { type: String, required: true },
    heat: {type: Number, required: true}, // nombre entre 1 et 10 décrivant la sauce
    likes: {type: Number},
    dislikes: { type: Number},
    usersLiked : ["String <userId>" ], // tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce
    usersDisliked : [ "String <userId>" ],// tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce
  });

  module.exports = mongoose.model('sauces', sauceSchema);