//importer mongoose pour la base de donnée
const mongoose = require('mongoose');
const mongooseinit = function(){
//importation pour utilisation des variables d'environnements
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  throw result.error
} 
console.log(result.parsed);


//connection à la base de donnée mongoDB 
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.higyyuo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,  
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
//------------------------------------------------------------
}
module.exports = mongooseinit;