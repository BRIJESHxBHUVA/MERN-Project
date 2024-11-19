const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const cors = require('cors')
const db = require('./Database/db')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use('/admin', require('./Routes/AdminRoutes'))
app.use('/user', require('./Routes/UserRoutes'))

app.use('Images/Admin', express.static(path.join(__dirname, 'Images/Admin')))
app.use('Images/Course', express.static(path.join(__dirname, 'Images/Course')))
app.use('Images/User', express.static(path.join(__dirname, 'Images/User')))

app.listen(port, (err)=>{
    if(err){
        console.log('Error coming while starting server')
    }else{
        console.log(`Server starting on port ${port}`)
    }
})