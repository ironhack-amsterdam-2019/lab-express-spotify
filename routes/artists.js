const express = require('express');
const router  = express.Router();
const spotify = require("../spotify.js")

let limit = 20;

/* GET home page */
router.get('/artists', (req, res, next) => {
  if(!req.query.artist || req.query.artist === "") res.redirect("/");
  this.options = { limit: limit, offset: req.query.offset ? parseInt(req.query.offset) : 0}
  spotify.searchArtists(req.query.artist, this.options)
    .then(data => {
      // strip artist id from the spotify uris
      for (let artist of data.body.artists.items) {
        artist.id = artist.uri.split(":")[2];
      }
      res.render('artists', {artists: data.body.artists, nextoffset: this.options.offset += limit, artist: req.query.artist});
    })
    .catch(err => {
      console.log("An error while searching artists occurred: ", err);
      res.redirect("/")
    })
});

module.exports = router;
