const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path=require('path');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080);