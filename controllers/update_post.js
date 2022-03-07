// Clinton Garwood
// Controller to update an existing blog post
// file is named update_post.js
// Spring 2022, CIS 234

const mongoose = require('mongoose')
const new_post = require('../models/new_post')

mongoose.connect('mongodb://localhost/blog_posts', {useNewUrlParser:true});

id = "62251040bc398bac2d00607c"
new_post.findByIdAndUpdate(id,{title:"This new title rocks!"}, (error, any_error)=>{
    console.log(error, any_error)
})
