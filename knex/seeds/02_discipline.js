const fs = require('fs');

const data = fs.readFileSync('../YourPlayGround/db/discipline.json');
const disciplines = JSON.parse(data);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('discipline').del()
    .then(function () {
      // Inserts seed entries
      return knex('discipline').insert(disciplines);
    });
};
