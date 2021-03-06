const mongoose = require('mongoose');
const mongo = require('mongodb');
const dbUrl = 'mongodb://localhost:27017/BlogDB';

mongoose.connect(dbUrl, {
    useNewUrlParser: true
})

const db = mongoose.connection
const Schema = mongoose.Schema

const blogSchema = new Schema({
    id: {
        type: Schema.ObjectId
    },
    title: {
        type: String,
        required: true

    },
    author: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true

    },
    content: {
        type: String,
        required: true

    },
})

const Blogs = module.exports = mongoose.model("blogs", blogSchema)