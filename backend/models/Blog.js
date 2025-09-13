const {Schema} = require('mongoose')

/**
 * Blog Schema to store all the blogs
 */
const blogSchema = Schema({
    blogType: {
        type: String,
        required: true
    },
    blogTitle: {
        type: String,
        required: true
    },
    blogKeywords: {
        type: [
            {
                type: String
            }
        ]
    },
    tone: {
        type: String,
        required: true
    },
    language: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)