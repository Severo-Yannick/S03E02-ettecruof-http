// Je jeu de la fourchette avec un serveur http
const http = require('http');
const PORT = 3000;

// Creation du serveur
const server = http.createServer((req, res) => {
  // Reponse du serveur
  res.end('La réponse du serveur !' );
});
// Serveur qui écoute le port 3000
server.listen(PORT);