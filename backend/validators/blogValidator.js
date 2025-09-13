const joi = require('joi')

const blogSchema = joi.object({
    blogType: joi.string().required(),
    blogTitle: joi.string().required(),
    blogKeywords: joi.array().items(joi.string()).optional(),
    tone: joi.string().optional(),
    language: joi.string().optional()
})

const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req['body'])

        if (error) {
            return res.status(400).message({
                success: false,
                message: "Bad Request"
            })
        }

        req.body = value
        next()
    }

}

module.exports = {
    blogValidate: validate(blogSchema)
}