
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table){
  table.increments('c_id');
  table.string('category');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories'); 
};
