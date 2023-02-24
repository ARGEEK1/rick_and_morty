const http = require('http');
// const data = require('../utils/data')
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')

const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var id = req.url.split('/').at(-1);
	if (req.url.includes('onsearch')) {
    getCharById(res, id);
  };
  
  if (req.url.includes('detail')) {
    getCharDetail(res, id);
  };

}).listen(PORT,'127.0.0.1');

// if (req.url.includes('rickandmorty/character')) {
// 	var id = Number(req.url.split('/').at(-1));
// 	res.writeHead(200, { 'Content-Type':'application/json' });
// 	var dataF = data.filter(char=>char.id === id)
// 	res.end(JSON.stringify(dataF[0]))
// }