exports.up = function(knex, Promise) {
    return knex.schema.createTable('note_avis', function(table) {
      table.bigInteger('idTerrain').notNullable();
      table.bigInteger('idUtilisateur').notNullable();
      table.bigInteger('note');
      table.string('commentaire');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('note_avis');
  }