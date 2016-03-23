
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(), 

    // Inserts seed entries
    knex('categories').insert(
        {
          category: 'Super'
        })                    
    );
};