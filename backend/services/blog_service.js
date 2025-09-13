const Blog = require("../models/Blog")

/**
 * To add a blog
 * @param {Blog} body 
 * @returns {Blog}
 */
const add = async (body) => {
    const blog = await Blog.create(body)
    return blog;
}

/**
 * To get all the blogs 
 * @returns {[Blog]}
 */
const allBlogs = async () => {
    await Blog.find();
}

module.exports = {add, allBlogs}