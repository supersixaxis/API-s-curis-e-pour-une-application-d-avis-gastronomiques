const User = require('../models/User');
const bcrypt = require('bcrypt')// npm install --save bcrypt pour hash les mot de passe
const jwt = require('jsonwebtoken') // npm install --save jsonwebtoken pour gerer le système de token (qui doit être aussi gerer dans le front end )
// nos actions pour le dossier routes/user

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) // on hash le password données par le user ( pour que ça soit sécurisé)
        .then(hash => {
            const user = new User({ // quand le password est hash ont crée le user avec l'email donnée et son password
                email: req.body.email,
                password: hash
            });
            user.save() // quand l'user est crée on le save 
                .then(() => res.status(201).json({ message: 'Utilisateur créé ! ' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }) // vérifier que l'e-mail entré par l'utilisateur correspond à un utilisateur existant de la base de données 
        .then(user => {
            if (!user) { // si l'email n'est pas correct cest qu'on a pas trouver son compte dans notre base de données
                return res.status(401).json({ message: 'Paire identifiant/ mot de passe incorrecte' }); // rester flou pour pas dire qu'il n'y a pas utilisateur avec le meme login(sinon on pourrait verifier si qlq est déja inscrit ou pas) sinon = fuite de données
            } else { // si l'utilisateur est bien enregistré dans la base de données
                bcrypt.compare(req.body.password, user.password) // on compare le mot de passe données avec le mot de passe enregistrer
                    .then(valid => {
                        if (!valid) { // si c'est faux / ne correspond pas ( ! = différent de )
                            return res.status(401).json({ message: 'Paire identifiant/ mot de passe incorrecte' });
                        } else { // si le mot de passe est correct on retourne un code 200 avec un objet qui va contenir les infos nécessaire a l'authentification
                            res.status(200).json({
                                userId: user._id,
                                token: jwt.sign( // Nous utilisons la fonction sign de jsonwebtoken pour chiffrer un nouveau token.
                                    { userId: user._id }, // Ce token contient l'ID de l'utilisateur en tant que payload (les données encodées dans le token).
                                    'RANDOM_TOKEN_SECRET', // RANDOM_SECRET_KEY pour crypter notre token (à remplacer par une chaîne aléatoire beaucoup plus longue pour la production). Puisque cette chaîne sert de clé pour le chiffrement et le déchiffrement du token, elle doit être difficile à deviner, sinon n’importe qui pourrait générer un token en se faisant passer pour notre serveur.
                                    { expiresIn: '24h' } // Nous définissons la durée de validité du token à 24 heures. L'utilisateur devra donc se reconnecter au bout de 24 heures.
                                )
                            });
                        }
                    })
                    .catch(error => {
                        res.status(500).json({ error });
                    })
            }
        })
        .catch(error => {
            res.status(500).json({ error })
        })
};


