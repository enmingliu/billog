//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// define the Express app
const app = express();

// define the database
const posts = [];

// enhance app security with Helmet
app.use(helmet());

// parse application/json content type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// retrieve all posts
app.get('/', (req, res) => {
    const ps = posts.map(p => ({
        id: p.id,
        title: p.title,
        content: p.content,
        comments: p.comments.length,
    }));
    res.send(ps);
});

// get a specific post
app.get('/:id', (req, res) => {
    const post = posts.filter(p => (p.id === parseInt(req.params.id)));
    if (post.length > 1) return res.status(500).send();
    if (post.length === 0) return res.status(404).send();
    res.send(post[0]);
});

// insert a new post
app.post('/', (req, res) => {
    const {title, content} = req.body;
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        comments: [],
    };
    posts.push(newPost);
    res.status(200).send();
});

// insert a new comment to a post
app.post('/comment/:id', (req, res) => {
    const {comment} = req.body;
    const post = posts.filter(p => (p.id === parseInt(req.params.id)));
    if (post.length > 1) return res.status(500).send();
    if (post.length === 0) return res.status(404).send();

    post[0].comments.push({
        comment,        
    });

    res.status(200).send();
});

// port identity
const port = 8081;

// start server
app.listen(port, () => {
    console.log('listening on port ' + port);
});