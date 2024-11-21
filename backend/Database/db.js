const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bhuvabrijesh14:jTapR1UjKCo3Kdb3@cluster0.8fetf.mongodb.net/?retryWrites=true&w=majority&appName=e-Learning')

const db = mongoose.connection

db.once('open', (err)=> {
    if(err){
        console.log('Database connection error ',err)
    }else{
        console.log('Database connection successfully.')
    }
})

module.exports = db