// Je jeu de la fourchette avec un serveur http
const http = require('http');
const PORT = 3000;
// Fonction qui génère ue nombre aléatoire
const getRandom = require('./modules/randomNumber');

// Creation du serveur
const server = http.createServer((req, res) => {
  let number = getRandom(1, 101);
  // Reponse du serveur
  res.end(`Un nombre aléatoire entre 0 et 100 ==> ${number}`);
});
// Serveur qui écoute le port 3000
server.listen(PORT);