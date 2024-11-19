const User = require('../Model/UserSchema')
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const Course = require('../Model/CourseSchema')
const jwt = require('jsonwebtoken')


module.exports.signup = async (req, res)=> {
    try {
        const useremail = await User.findOne({email: req.body.email})
        if(useremail){
            return res.status(400).json({success: false, message: 'Email address already exists'})
        }
        if(req.file){
            req.body.image = req.file.filename
        } 
        req.body.createdAT = moment().format('LLLL')

        const data = await User.create(req.body)
        res.status(201).json({success: true, message: 'User regestration successfully', data})

    } catch (error) {
        res.status(400).json({success: false, message: 'User registration error', error})
    }
}

module.exports.login = async (req, res)=> {
    try {
        const user = await User.findOne({email: req.body.email})
        if(user){
            if(user.password == req.body.password){
                const token = jwt.sign({ id: user._id }, 'user', {expiresIn: '1h'})
                res.status(200).json({success: true, message: 'Login successfully', token, user})
            }else{
                res.status(400).json({success: false, message: 'Invalid password'})
            }
        }else{
            res.status(400).json({success: false, message: 'Invalid email address'})
        }
    } catch (error) {
        req.status(400).json({success: false, message: 'Login error ',error})
    }
}

module.exports.course = async (req, res)=> {
    try {
        const data = await Course.find({})
        if(data.length <= 0){
            res.status(404).json({success: false, message: 'Course not found.'})
        }
        res.status(200).json({success: true, message: 'Data get successfully', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'Course viewing error ', error})
    }
}

module.exports.edituser = async (req, res)=> {
    try {
        const data = await User.findById(req.query.id)
        if(data){
            res.status(200).json({success: true, message: 'Data get successfully', data})
        }else{
            res.status(400).json({success: false, message: 'Data not found'})
        }
    } catch (error) {
        res.status(400).json({success: false, message: 'Data not found', error})
    }
}

module.exports.edit = async (req, res)=> {
    try {
        const userimg = await User.findById(req.query.id)
        if(userimg.image){
            const oldImage = path.join(__dirname, '../Images/User/', userimg.image)
            fs.unlinkSync(oldImage)
        }
        req.body.image = req.file.filename

        const data = await User.findByIdAndUpdate(req.query.id, req.body)
        res.status(201).json({success: true, message: 'User update successfully', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'User not edited', error})
    }
}