
var knex = require('../../../db/knex');
var articles = function() {return knex('articles');};

module.exports = {

  getAllArticles: function(){
    return articles()
    .leftJoin('categories', 'articles.c_id', 'categories.c_id')
    .then(function(articles) {
      return articles;
    });
  }
  // getSingleMember: function(id){
  //   return members()
  //   .where('m_id', id)
  //   .then(function(results) {
  //     return results;
  //   });
  // }

};