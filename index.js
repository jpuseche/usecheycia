const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile('views/index.html', {root: __dirname});
  })

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});