// Clinton Garwood
// Controller to create a new blog post
// file is named create_post.js
// Spring 2022, CIS 234

const mongoose = require('mongoose')
const new_post = require('../models/new_post')

mongoose.connect('mongodb://localhost/blog_posts', {useNewUrlParser:true});

id = "62251040bc398bac2d00607c"
new_post.findById(id, (error, any_error)=>{
    console.log(error, any_error)
})
