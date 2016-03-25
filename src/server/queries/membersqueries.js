
var knex = require('../../../db/knex');
var members = function() {return knex('members');};

module.exports = {

    getAllMembers: function(){
        return members()
        .then(function(members) {
            return members;
        });
    }

};