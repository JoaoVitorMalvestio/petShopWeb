var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet = require('../models/Pet.js');

/* GET ALL PETS */
router.get('/', function(req, res, next) {
  Pet.find(function (err, pets) {
    if (err) return next(err);
    res.json(pets);
  });
});

/* GET SINGLE PET BY ID */
router.get('/:id', function(req, res, next) {
  Pet.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PET */
router.post('/', function(req, res, next) {
  Pet.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PET */
router.put('/:id', function(req, res, next) {
  Pet.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PET */
router.delete('/:id', function(req, res, next) {
  Pet.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;