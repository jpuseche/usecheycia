const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile('views/home.html', {root: __dirname });
  })

app.get('/services', function (req, res) {
  res.sendFile('views/services.html', {root: __dirname});
})

app.get('/products', function (req, res) {
  res.sendFile('views/products.html', {root: __dirname});
})

// app.get('/about-us', function (req, res) {
//   res.sendFile('views/about_us.html', {root: __dirname});
// })

// app.get('/contact', function (req, res) {
//   res.sendFile('views/contact.html', {root: __dirname});
// })

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});