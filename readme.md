# Installation et mise en service du frontend et du backend
## Backend

Teste Markdown = important 
`console.log()`



## FrontEnd 
-téléchargement du frontend ici : https://github.com/OpenClassrooms-Student-Center/dwj-projet6 ou $ git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git frontend

après : avec le terminal dans le dossier racine du frontend

$ npm install

$ npm start

Dans le navigateur mettre l'adresse : http://localhost:4200/

Pour accéder aux sauces il faut créer un compte en cliquant sur inscription et il faut mettre un mot de passe

## les dépendances du backend :

bcrypt : hash le password avant de le stocker dans la base de donné

express : framework node.js pour faire la web api

jsonwebtoken: authentification par token

mongoose: pour la base de donnée mongodb

mongoose-unique-validator: pour le controle du mail unique dans la base de donnée

multer : pour l'upload de fichier

nodemon : pour relancer le serveur à chaque modification dans le code source

password-validator: pour valider un mot de passe fort