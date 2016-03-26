
var knex = require('../../../db/knex');
var members = function() {return knex('members');};

module.exports = {

  getAllMembers: function(){
    return members()
    .then(function(members) {
      return members;
    });
  },
  getSingleMember: function(id){
    return members()
    .where('m_id', id)
    .then(function(results) {
      return results;
    });
  }

};