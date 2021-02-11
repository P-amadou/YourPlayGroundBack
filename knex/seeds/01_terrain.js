const fs = require('fs');

const data = fs.readFileSync('../YourPlayGround/db/terrain.json');
const terrains = JSON.parse(data);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('terrain').del()
    .then(function () {
      // Inserts seed entries
      let resultat = []
      let idTerrain = 1;
      terrains.forEach(terrain => {
        let adresse = terrain['adresse']
        delete terrain.adresse
        resultat.push(knex('terrain').insert(terrain))
        adresse['idTerrain'] = idTerrain;
        resultat.push(knex('adresse').insert(adresse))
        idTerrain++
    });
    return Promise.all(resultat)
    });
};
