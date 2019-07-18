require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', require('./routes/home'));

app.use('/', require('./routes/artists'));

app.use('/', require('./routes/albums'));

app.use('/', require('./routes/album'));

app.listen(3000, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));