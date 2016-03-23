
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('articles').del(), 

    // Inserts seed entries
    knex('articles').insert(
        {
          title: 'Super',
          article: 'User',
          c_id: 'super.user@gmail.com'
        })                    
    );
};