var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/thefirm';
var knex = require('../../../db/knex');
var members = require('../queries/membersqueries');

router.get('/', function(req, res, next) {
  members.getAllMembers().then(function(members) {
    res.render('members/all', { title: 'All Members', members:members });
  });
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  members.getSingleMember(id).then(function(members) {
    res.render('members/single', { title: 'Individual Member', members:members });
  });
});

module.exports = router;
