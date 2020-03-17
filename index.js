require('dotenv').config()

var fs = require('fs');

var path = require('path')

const express = require('express')

const app = express()

var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));
// app.use(express.static(`${__dirname}/dist`))
// app.use(express.static('public'));
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


app.listen(process.env.PORT || 4000, () => console.log(`Running on port ${process.env.PORT}`))

// 'node index.js' to test on Terminal