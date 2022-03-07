// Clinton Garwood
// Controller to delete an existing blog post
// file is named remove_post.js
// Spring 2022, CIS 234

const mongoose = require('mongoose')
const new_post = require('../models/new_post')

mongoose.connect('mongodb://localhost/blog_posts', {useNewUrlParser:true});

id = "62251040bc398bac2d00607c"
new_post.findByIdAndRemove(id, (error, any_error)=>{
    console.log(error, any_error)
})
