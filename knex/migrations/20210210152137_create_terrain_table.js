exports.up = function(knex, Promise) {
    return knex.schema.createTable('terrain', function(table) {
      table.increments('idTerrain').primary();
      table.string('coordonnees_gps').notNullable();
      table.string('nom').notNullable();
      table.string('email'); 
      table.string('telephone');
      table.string('siteweb');
      table.text('description');
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('terrain');
  }
