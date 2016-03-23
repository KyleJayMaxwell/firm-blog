
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
  table.increments('p_id');
  table.integer('a_id').references('a_id').inTable('articles');
  table.integer('m_id').references('m_id').inTable('members');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
