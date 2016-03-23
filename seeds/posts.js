
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(), 

    // Inserts seed entries
    knex('posts').insert(
        {
          a_id: 'Super',
          m_id: 'super.user@gmail.com'
        })                    
    );
};