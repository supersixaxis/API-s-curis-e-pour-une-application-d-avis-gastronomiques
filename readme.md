# Installation et mise en service du frontend et du backend

## Backend

-téléchargement du backend ici : https://github.com/jpmazel/oc-dw-projet6-piquante ou
`$ git clone https://github.com/jpmazel/oc-dw-projet6-piquante.git backend`

`$ cd backend`

après, avec le terminal dans le dossier racine du backend

`$ npm install`

après, création du fichier .env à la racine du répertoire et y mettre les valeurs correctes pour se connecter à une base de donnée mongodb :

`PORT = 3000` (le front fonctionne bien avec le backend sur le port 3000)

`DB_USERNAME="username de la base de donnée mongodb"`

`DB_PASSWORD="password de la base de donnée mongodb"`

`DB_NAME="nom de la base de donnée mongodb"`

`JWT_DECODEDTOKEN="RANDOM_TOKEN_SECRET"`

ou prendre le fichier `.en.example`, mettre les bonnes valeurs et modifier le nom du fichier en `.env`

et après
`$ npm run start`

## FrontEnd 
-téléchargement du frontend ici : https://github.com/OpenClassrooms-Student-Center/dwj-projet6 ou `$ git clone https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git frontend`

après : avec le terminal dans le dossier racine du frontend

`$ npm install`

`$ npm start`

Dans le navigateur mettre l'adresse : http://localhost:4200/

Pour accéder aux sauces il faut créer un compte en cliquant sur inscription et il faut mettre un mot de passe

## les dépendances du backend :

* bcrypt : hash le password avant de le stocker dans la base de donné  
* express : framework node.js pour faire la web api  
* jsonwebtoken: authentification par token  
* mongoose: pour la base de donnée mongodb  
* mongoose-unique-validator: pour le controle du mail unique dans la base de donnée  
* multer : pour l'upload de fichier  
* nodemon : pour relancer le serveur à chaque modification dans le code source  
* password-validator: pour valider un mot de passe fort  
* dotenv : pour l'utilisation des variables d'environnement  
* mongoSanitize : protection injection sql  
* morgan : logger requête et response du server