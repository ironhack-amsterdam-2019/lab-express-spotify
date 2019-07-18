const express = require('express');
const router  = express.Router();
const spotify = require("../spotify.js")

let limit = 20;

/* GET home page */
router.get('/artist/:id', (req, res, next) => {
  this.options = { limit: limit, offset: req.query.offset ? parseInt(req.query.offset) : 0}
  spotify.getArtistAlbums(req.params.id, this.options)
    .then(data => {
      res.render('albums', {data: data.body, nextoffset: this.options.offset += limit});
    })
    .catch(err => {
      console.log("An error while getting artist albums occurred: ", err);
      res.send("Error... Sorry about that<br><a href='/'>Take me back home</a>")
    })
});

module.exports = router;
