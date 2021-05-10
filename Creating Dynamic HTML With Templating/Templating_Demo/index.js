const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/Templating_Demo/public')))

// By default express assumes that there is a dir views
app.set('view engine', 'ejs');

//refers to where is the file located
app.set('views', path.join(__dirname, '/views'))

//Routes
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data){
    res.render('subreddit', { ...data })
    }
    else {
        res.render('notfound', {subreddit})
    }
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephenie', 'Puhi'
    ]
    res.render('cats', {cats});
});

app.get('/random', (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1;
    // We can pass arguments as a second argument so we can use it in the template
    res.render('random', { number });
})

app.get('*', (req, res) => {
    res.set('There is no such page');
})

app.listen(port, () => {
    console.log('Listening on port 8080');
})