const { add, allBlogs } = require("../services/blog_service")

/**
 * API Route to add a blog
 * @param {Blog} req --> {blogTitle -> string, blogType ->  string, blogKeywords -> string[], tone-> string, language -> string}
 * @param {Blog} res 
 */
const addBlog = async (req, res) => {
    try {
        const body = req.body;
        await add(body)

        res.status(201).send({ success: true, message: "Successfully added the Blog" })
    }
    catch (err) {
        res.status(500).send({ success: false, message: "Internal Server Error" })
    }
}

/**
 * API Route to get all the blog's
 * @param {''} req
 * @param {[Blog]} res 
 */
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await allBlogs();
        res.status(200).send({ success: true, blogs, message: "Successfully fetched the blogs." })
    }
    catch (err) {
        res.status(500).send({ success: false, message: "Internal Server Error" })
    }
}

module.exports = { addBlog, getAllBlogs }