const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

// création d'un nouvel objet quand on en met un en vente sur le navigateur
router.post('/', auth, multer, sauceCtrl.createSauce)
// permet de modifier un objet deja mis en vente 
router.put('/:id', auth, multer, sauceCtrl.modifySauce)
// .delete permet de supprimer un objet
router.delete('/:id', auth, sauceCtrl.deleteSauce)
// permet d'afficher un produit quand on clique dessus
router.get('/:id', auth, sauceCtrl.getOneSauce)
// permet d'afficher tout les objets mis en vente sur la page d'acceuil
router.get('/', auth, sauceCtrl.getAllSauces)
// permet de like / (dislike ?) les sauces 
 router.post('/:id/like', auth, sauceCtrl.likeSauce )

module.exports = router;