//Require models from models direcrtory
// var Venue = require('../models/venue.js');
// var Music = require('../models/music.js');
// var Flowers = require('../models/flowers.js');
// var BridalShop = require('../models/bridalShops.js');
var db = require('..models')

module.exports = function(app) {
//get routes
 //venues
  app.get(`/api/:venues?`, function(req, res){
    if (req.params.venues) {
        db.Venue.findOne({
          where: {
            routeName: req.params.characters
          }
        }).then(function(result){
          return res.json(result);
        });
      } 
      else {
        db.Venue.findAll({})
        .then(function(result) {
          return res.json(result);
        });
      }
    });

  //bridalshops
  app.get('/api/:bridalshops?', function(req, res) {
    if (req.params.bridalshops) {
      db.BridalShop.findOne({
        where: {
          routeName: req.params.bridalshops
        }
      }).then(function(result) {
        return res.json(result);
      });
    } 
    else {
      db.BridalShop.findAll({})
      .then(function(result) {
        return res.json(result);
      });
    }
  });

  //music
  app.get('/api/:music?', function(req, res) {
    if (req.params.music) {
      db.Music.findOne({})
      .then(function(result) {
        return res.json(result);
      });
    } 
    else {
      db.Music.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }
  });

  //flowers
  app.get('./api/:flowers?', function(req, res) {
    if (req.params.flowers) {
      db.Flowers.findOne({
       where: { 
          routeName: req.params.flowers
       }
      })
      .then(function(result) {
        return res.json(result);
      });
    }
    else {
      db.Flowers.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }
  });


//post route
  app.post(`/api/venues`, function(req, res){
      var venues = req.body;
      var routeName = venue.name.replace(/\s+/g, "").toLowerCase();

      db.Venue.create({
        routeName: routeName,
        name: venue.name,
        address: venue.address,
        location: venue.location,
        capacity: venue.capacity,
        phone: venue.phone,
        cost: venue.cost
      });
  });

  app.post(`/api/bridalshops`, function(req, res){
      var bridalshop = req.body;
      var routeName = bridalshop.name.replace(/\s+/g, "").toLowerCase();

     db.BridalShop.create({
        routeName: routeName,
        name: bridalshop.name,
        address: bridalshop.address,
        phone: bridalshop.phone,
        email: bridalshop.email,
        cost: bridalshop.cost
      });
  });

  app.post(`/api/music`, function(req, res){
      var music = req.body;
      var routeName = music.name.replace(/\s+/g, "").toLowerCase();

      db.Music.create({
        routeName: routeName,
        name: music.name,
        phone: music.phone,
        email: music.email,
        cost: music.cost
      });
  });

  app.post(`/api/flowers`, function(req, res){
      var flower = req.body;
      var routeName = flower.name.replace(/\s+/g, "").toLowerCase();

     db.Flowers.create({
        routeName: routeName,
        name: flower.name,
        phone: flower.phone,
        email: flower.email,
        cost: flower.cost
      });
  });

  //update
  app.put(`/api/:venues`, function(req, res){
    //code here
  });
  app.put(`/api/:bridalshops`, function(req, res){
    //code here
  });
  app.put(`/api/:music`, function(req, res){
    //code here
  });
  app.put(`/api/:flowers`, function(req, res){
    //code here
  });

};