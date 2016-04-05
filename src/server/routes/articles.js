var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/thefirm';
var knex = require('../../../db/knex');
var articles = require('../queries/articles');

router.get('/', function(req, res, next) {
  articles.getAllArticles().then(function(articles) {
    res.render('articles/all', { title: 'All Articles', articles : articles });
  });

});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  articles.getSingleArticle(id).then(function(article) {
    res.render('articles/single', { title: 'One Article', article : article });
  });

});

module.exports = router;
