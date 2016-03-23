
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', function(table){
  table.increments('a_id');
  table.string('title');
  table.text('article');
  table.integer('c_id').references('c_id').inTable('categories');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles');
};
