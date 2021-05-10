//Creating a server with express
const express = require("express");
//execute express
const app = express();
const port = 8080;

//Can have only one response
// app.use((req, res) => {
//     //All request sent will run this
//     console.log('WE GOT A NEW REQUEST')
//         // res.send('Hello! We got your request!')
//         // res.send({ color: 'red' })
//         // res.send('<h1>This is <b>so COOL REQUEST</b>!</h1>');
// })

//Home page
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Welcome to MY EXPRESS SERVER</h1>');
})

// You can type everything after r/ 
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1 style="text-align: center">Browsing the ${subreddit} </h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1 style="text-align: center">Viewing Post Id ${postId} on the subreddit ${subreddit}</h1>`);
});

app.post('/cats', (req, res) => {
    res.send('WOWOWOWO YOU"VE MADE A POST REQUEST');
})

app.get('/cats', /*callback*/ (req, res) => {
    res.send('Meow');
})

app.get('/dogs', (req, res) => {
    res.send('Woof!')
})

app.get('/search', (req, res) => {
    const { car, model } = req.query;
    if (!car) {
        res.send("Nothing found if nothing search")
    }
    res.send(`Search results for: ${car} ${model}`);
})

// '*' - means everything
// We make this routh in the buttom because it will match with everything we type
app.get('*', (req, res) => {
    res.send('I do not know that path!');
})

app.listen(port, () => {
    console.log("LISTENING ON A PORT 8080!");
});


//Auto-restart with Nodemon