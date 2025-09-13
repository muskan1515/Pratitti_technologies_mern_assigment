const express = require('express')
const { addBlog, getAllBlogs } = require('../controllers/blog_controller')
const { blogValidate } = require('../validators/blogValidator')
const router = express.Router()

router.post("/", blogValidate, addBlog)

router.get("/", getAllBlogs)

module.exports = router