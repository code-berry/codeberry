const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const char = require('chart.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home.ejs');
});

app.get('/about', (req, res) => {
	res.render('about.ejs');
});

app.get('/services', (req, res) => {
	res.render('services.ejs');
});

app.get('/portfolio', (req, res) => {
	res.render('portfolio.ejs');
});

app.listen(3000, () => {console.log('you made it')});