// Je jeu de la fourchette avec un serveur http
const http = require('http');
const PORT = 3000;
// Fonction qui génère ue nombre aléatoire
const getRandom = require('./modules/randomNumber');
// Nombre aléatoire mini
let minBoundary = 1;
// Nombre aléatoire maxi
let maxBoundary = 100;
// Génération d'un nombre aléatoire
let number = getRandom(minBoundary, maxBoundary);
let message = '';

const Response = ((req, res) => {
  switch (req.url) {
    case '/':
      message = `Est ce que le nombre est ${number} ?`;
      break;
    case '/plus':
      minBoundary = number ++;
      number = getRandom(minBoundary, maxBoundary);
      message = `Est ce que le nombre est ${number} ?`;
      break;
    case '/moins':
      maxBoundary = number --;
      number = getRandom(minBoundary, maxBoundary);
      message = `Est ce que le nombre est ${number} ?`;
    break;
    case '/bravo':
      message = 'C\'est gagné !';
      break;
    default:
      res.statusCode = 404;
      message = 'Page non trouvée';
  }
  res.write(`<p style='text-align: center;'>${message}</p>`);
  res.end();
});

// Creation du serveur
const server = http.createServer(Response);
// Serveur qui écoute le port 3000
server.listen(PORT);