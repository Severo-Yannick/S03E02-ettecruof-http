// Je jeu de la fourchette avec un serveur http
const http = require('http');
const PORT = 3000;
// Fonction qui génère ue nombre aléatoire
const getRandom = require('./modules/randomNumber');

// Creation du serveur
const Response = ((req, res) => {
  let number = getRandom(1, 101);
  let message = '';

  switch (req.url) {
    case '/':
      message = 'Est ce que c\'est plus de 50 ?';
      break;
    case '/plus':
      message = 'Vous dites Plus OK!';
      break;
    case '/moins':
      message = 'Vous dites Moins OK!';
      break;
    case '/bravo':
      message = 'C\'est gagné !';
      break;
    case '/number':
      message = `Nombre aléatoire entre 1 & 100 inclus ==> ${number}`;
      break;

    default:
      res.statusCode = 404;
      message = 'Page non trouvée';
  }
  res.write(`<p style="text-align: center;">${message}</p>`);
  res.end();
});

// Creation du serveur
const server = http.createServer(Response);
// Serveur qui écoute le port 3000
server.listen(PORT);