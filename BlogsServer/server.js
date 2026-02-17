const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const blogs = require('./blogs/blogs')


const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(cors());

app.get('/blogs', async (req, res) => {
  let data = await blogs.getAllBlogs()
  res.send(data);
});

app.post('/blog/add', async (req, res) => {
    let data = await blogs.addBlog(req.body)
    res.json(data);
});

app.get('/blog/upvote/:blogID', async (req, res) => {
    let params = req.params
    let data = await blogs.upVoteBlog(params["blogID"])
    res.send(data);
});


server.listen('4000', () => {
    console.log(`Admin server listening to localhost:4000`);
});