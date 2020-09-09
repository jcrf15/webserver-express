const express = require('express')
const app = express();
const hbs = require('hbs');

//import helpers
require('./hbs/helpers');

//heroku
const port = process.env.PORT || 3000;
//midleware
app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    // res.send('Hello World')



    res.render('home', {

        nombre: 'juan carlos'

    });


});
app.get('/about', (req, res) => {
    // res.send('Hello World')



    res.render('about');


});





app.listen(port), () => {

    console.log(`Escuchando peticiones en el puerto ${port}`);
}