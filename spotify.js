const SpotifyAPI = require('spotify-web-api-node');

const spotify = new SpotifyAPI({
  clientId: process.env.SPOTIFY_APP_ID,
  clientSecret: process.env.SPOTIFY_APP_SECRET
})

// Retrieve an access token
spotify.clientCredentialsGrant()
  .then(data => {
    spotify.setAccessToken(data.body['access_token']);
    console.log('Authorized by Spotify');
  })
  .catch(error => {
    console.log('Something went wrong when retrieving an access token', error);
  });

module.exports = spotify;