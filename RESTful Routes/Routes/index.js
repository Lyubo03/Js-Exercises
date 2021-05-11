//CRUD IMPLEMENTATAION

const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const {v4 : uuid} = require('uuid');
//To be able to override express method (ex: patch)
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'))

app.get('/', (req,res) =>{
    res.send('Get /tacos response');
})

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req,res) =>{
    res.render('comments/new');
})

app.post('/comments',(req,res)=>{
const {comment, username } = req.body;
comments.push({username: username, comment:comment, id: uuid()});
res.redirect('/comments')
})

app.get('/comments/:id', (req,res) =>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    if(comment === undefined ){
        throw new Error('There is no such a comment');
    }
    res.render('comments/show', {comment});
})

app.get('/comments/:id/edit', (req,res) =>{
    const { id } = req.params;
    const comment = comments.filter(c => c.id === id);
    res.render('comments/edit', {comment})
});

//updating or adding something to a entity
app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
     res.redirect('/index');
})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req, res) =>{
    res.render('index');
})

app.post('/tacos', (req,res) =>{
    const {meat, qty} = req.body;
    res.send(`Here are your ${qty} ${meat}`)
})

app.listen(port,() =>{
console.log(`I AM LISTENING ON PORT ${port}`);
})


const comments = [
{
    id: uuid(),
    username: 'Stan',
    comment: 'I like to go on motorsport events'
},{
    id: uuid(),
    username: 'John',
    comment: 'Today is my birthday'
},{
    id: uuid(),
    username: 'Stella',
    comment: 'I like to drink high quality beer'
},{
    id: uuid(),
    username: 'Matthew',
    comment: 'I like to go on hackatons'
},
{
    id: uuid(),
    username: 'George',
    comment: 'I am a car enthusiast'
}];