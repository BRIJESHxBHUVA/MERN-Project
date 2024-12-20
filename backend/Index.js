const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const db = require('./Database/db')
const cors = require('cors')

const allowedOrigins = [
    'https://e-learning-brijesh-bhuva-project.vercel.app',
    'https://elearning-adminpanel-brijesh-bhuva-project.vercel.app'
]

app.use(express.urlencoded())
app.use(express.json())

app.use(cors({
    origin: (origin, callback)=> {
        if(!origin) return callback(null, true);

        if(allowedOrigins.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}))

app.use('/admin', require('./Routes/AdminRoutes'))
app.use('/user', require('./Routes/UserRoutes'))

app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use('/Images/Admin', express.static(path.join(__dirname, 'Images/Admin')))
app.use('/Images/Course', express.static(path.join(__dirname, 'Images/Course')))
app.use('/Images/User', express.static(path.join(__dirname, 'Images/User')))

app.listen(port, (err)=>{
    if(err){
        console.log('Error coming while starting server')
    }else{
        console.log(`Server starting on port ${port}`)
    }
})


// username: bhuvabrijesh14
// password: jTapR1UjKCo3Kdb3
