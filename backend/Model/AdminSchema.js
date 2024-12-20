const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },  
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
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

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin