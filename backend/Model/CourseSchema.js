const mongoose = require('mongoose')
const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numofvid: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAT: {
        type: String,
        required: true
    }
})

const Course = mongoose.model('Course', CourseSchema)
module.exports = Course