exports.up = function(knex, Promise) {
    return knex.schema.createTable('adresse', function(table) {
      table.bigInteger('idTerrain');
      table.bigInteger('idUtilisateur');
      table.string('type_voie').notNullable();
      table.string('lib_voie').notNullable();
      table.bigInteger('num_voie').notNullable();
      table.bigInteger('code_postale');
      table.string('ville');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('adresse');
  }