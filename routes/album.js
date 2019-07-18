const express = require('express');
const router  = express.Router();
const spotify = require("../spotify.js")

// 50 seems to be the maximum limit allowed by the API (try to list all tracks on one page...)
let limit = 50;

/* GET home page */
router.get('/album/:id', (req, res, next) => {
  this.options = { limit: limit, offset: req.query.offset ? parseInt(req.query.offset) : 0}
  spotify.getAlbumTracks(req.params.id, this.options)
    .then(data => {
      res.render('tracks', {data: data.body, nextoffset: this.options.offset += limit});
    })
    .catch(err => {
      console.log("An error while getting tracks of an album: ", err);
      res.send("Error... Sorry about that<br><a href='/'>Take me back home</a>")
    })
});

module.exports = router;
