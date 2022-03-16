const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Our Home Page';
  res.render('pages/index',{'title':title});
})

app.get('/about-artist', (req, res) => {
  var title = 'Our About Artist Page';
  res.render('pages/about-artist',{'title':title});
})


app.get('/album', (req, res) => {
  var title = 'Our Artist Album Page';
  res.render('pages/album',{'title':title});
})
app.get('/song-list', (req, res) => {
  var title = 'Our Artist Song List Page';
  res.render('pages/song-list',{'title':title});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});