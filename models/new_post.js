// Clinton Garwood
// Model for a new blog post
// file is named new_post.js
// Spring 2022, CIS 234

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blog_post_schema = new Schema({
    title: String,
    body: String
});

const new_post = mongoose.model('new_post',blog_post_schema)
module.exports = new_post
