
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(), 

    // Inserts seed entries
    knex('categories').insert(
        {
          category: 'Art'
        }),  
    knex('categories').insert(
        {
          category: 'Fashion'
        }),
    knex('categories').insert(
        {
          category: 'Footwear'
        }),  
    knex('categories').insert(
        {
          category: 'Music'
        }), 
    knex('categories').insert(
        {
          category: 'Music'
        }),  
    knex('categories').insert(
        {
          category: 'Sports'
        }),  
    knex('categories').insert(
        {
          category: 'Lifestyle'
        })              
  );
};