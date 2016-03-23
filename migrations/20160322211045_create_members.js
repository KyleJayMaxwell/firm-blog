
exports.up = function(knex, Promise) {
  return knex.schema.createTable('members', function(table){
  table.increments('m_id');
  table.string('name');
  table.string('password');
  table.text('bio');
  table.string('twitter');
  table.string('instagram');
  table.boolean('writer');
  table.boolean('editor');
  table.boolean('admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('members');   
};
