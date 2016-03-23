
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('articles').del(), 

    // Inserts seed entries
    knex('articles').insert(
        {
          name: 'Super',
          password: 'User',
          bio: 'super.user@gmail.com',
          twitter: 'ahad',
          instagram: 'haha',
          writer: null,
          editor: null,
          admin: null
        })                    
    );
};