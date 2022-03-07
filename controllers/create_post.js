// Clinton Garwood
// Controller to create a new blog post
// file is named create_post.js
// Spring 2022, CIS 234

const mongoose = require('mongoose')
const new_post = require('../models/new_post')

mongoose.connect('mongodb://localhost/blog_posts', {useNewUrlParser:true});

new_post.create({
    title: "Blog post the first",
    body: "This is simple text for the body."
}, (error, any_error)=>{
    console.log(error, any_error)
})
