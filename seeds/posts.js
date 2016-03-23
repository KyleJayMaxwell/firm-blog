
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(), 

    // Inserts seed entries
    knex('posts').insert(
        {
          a_id: 1,
          m_id: 1
        }),
    knex('posts').insert(
        {
          a_id: 2,
          m_id: 3
        })                
  );
};