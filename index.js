'use strict'

const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname)));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/scripts', express.static(__dirname + '/scripts'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up on ' + 3000);
})