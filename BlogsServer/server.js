const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const csrf = require('csrf');

const blogs = require('./blogs/blogs')


const app = express();
const server = require('http').createServer(app);

// Create CSRF tokens instance
const tokens = new csrf();

app.use(bodyParser.json());
app.use(cors());

// CSRF protection middleware
app.use((req, res, next) => {
    // Skip CSRF for GET requests (read-only)
    if (req.method === 'GET') {
        return next();
    }

    // Get the secret from headers or generate a new one
    const secret = req.headers['x-csrf-secret'] || tokens.secretSync();
    const token = req.headers['x-csrf-token'];

    if (!token || !tokens.verify(secret, token)) {
        return res.status(403).json({ error: 'Invalid CSRF token' });
    }

    next();
});

// Endpoint to get CSRF token
app.get('/csrf-token', (req, res) => {
    const secret = tokens.secretSync();
    const token = tokens.create(secret);
    res.json({ csrfSecret: secret, csrfToken: token });
});

app.get('/blogs', async (req, res) => {
  let data = await blogs.getAllBlogs()
  res.send(data);
});

app.post('/blog/add', async (req, res) => {
    let data = await blogs.addBlog(req.body)
    res.send(data);
});

app.get('/blog/upvote/:blogID', async (req, res) => {
    let params = req.params
    let data = await blogs.upVoteBlog(params["blogID"])
    res.send(data);
});


server.listen('4000', () => {
    console.log(`Admin server listening to localhost:4000`);
});