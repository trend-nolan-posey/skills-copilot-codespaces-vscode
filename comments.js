// Create web server using express
var express = require('express');
var router = express.Router();
var comments = require('../models/comments');

// Get all comments from database
router.get('/', function(req, res, next) {
  comments.getAllComments(function(err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Get single comment from database
router.get('/:id', function(req, res, next) {
  comments.getCommentById(req.params.id, function(err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Add new comment to database
router.post('/', function(req, res, next) {
  comments.addComment(req.body, function(err, count){
    if(err){
      res.json(err);
    } else {
      res.json(req.body);
    }
  });
});

// Delete comment from database
router.delete('/:id', function(req, res, next) {
  comments.deleteComment(req.params.id, function(err, count){
    if(err){
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

// Update comment in database
router.put('/:id', function(req, res, next) {
  comments.updateComment(req.params.id, req.body, function(err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

// Export router
module.exports = router;