 /*jshint esversion: 6*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let blacklist = {
  'selfie': 'self-portrait',
  'yummers': 'delicious',
  'outchea': 'are out here',
  'bruh': 'wow',
  'doge': 'pug',
  'cilantro': 'soap',
  'bae': 'loved one',
  'swag': 'style',
  'yolo': 'carpe diem'
};

//parse application
app.use(bodyParser.urlencoded({extended: false}));

app.use('/message', (req, res, next) => {
  req.body.message = req.body.message
    .toLowerCase()
    .replace(new RegExp(Object.keys(blacklist)
    .join('|'),'gi'), match => blacklist[match]);
  next();
});

app.post('/message', (req, res) => {
  res.send(req.body.message);
});


//activate server
const server = app.listen(3000, () => {
  console.log('server listening on port 3000');
});