const axios = require("axios");

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      let character = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin,
        location : data.location,
        episode : data.episode,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) => {
      res
        .writeHead(500, { "Content.Type": "text/plain" })
        .end(`El personaje con el ${id} no fue encontado`);
    });
};

module.exports = getCharDetail;
