// Clinton Garwood
// CIS 234 Spring 2022
// file name: boot_blog_server.js

const express = require('express')
const path = require('path')
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_posts', {useNewUrlParser:true})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('views', path.join(__dirname, './public/views'));
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.listen(3000, ()=>{
    console.log("App for Bootstrap Blog Tutorial #3 is listening on port 3000.")
})

app.get('/contact',(req, res)=>{
    res.render('contact')
})

app.get('/about',(req, res)=>{
    res.render('about')
})

app.get('/post',(req, res)=>{
    res.render('post')
})

app.get('/posts/new',(req,res)=>{
    res.render('create')
})

const new_post = require('./models/new_post.js')

app.post('/posts/store', async (req,res)=>{
  await new_post.create(req.body)
      res.redirect('/')
  })

app.get('/', async (req, res)=>{
    const all_posts = await new_post.find({})
    res.render('index', {all_posts})
})
