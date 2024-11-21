const Admin = require('../Model/AdminSchema')
const Course = require('../Model/CourseSchema')
const User = require('../Model/UserSchema')
const moment = require('moment')
const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')


module.exports.login = async (req, res)=> {
    try {
        const user = await Admin.findOne({ email: req.body.email })
        if(user){
            if(user.password == req.body.password){
                const token = jwt.sign({ id: user._id }, 'admin', {expiresIn: '1h'})
                res.status(200).json({success: true, message: 'Login successfully', token, user})
                console.log(token)
            }else{
                res.status(400).json({success: false, message: 'Invalid Password'})
            }
        }else{
            res.status(400).json({success: false, message: 'Invalid email address'})
        }

    } catch (error) {
        res.status(400).json({success: false, message: 'Login Error..', error})
    }
}

module.exports.addAdmin = async (req, res)=> {
    try {
        const useremail = await Admin.findOne({email: req.body.email})

        if(useremail){
           return res.status(400).json({success: false, message: 'Email already exist.'})
        }

            if(req.file){
                req.body.image = req.file.filename
            }
            req.body.createdAT = moment().format('LLLL')

            const data = await Admin.create(req.body)
            res.status(201).json({success: true, message: 'Admin Register Successfully.', data})
        
    } catch (error) {
        res.status(400).json({success: false, message: 'Signup Error', error})
    }
}

module.exports.editAdmin = async (req, res)=> {
    try {
        const data = await Admin.findById(req.query.id)
        if(data){
            res.status(200).json({success: true, message: 'Data get successfully.', data})
        }else{
            res.status(400).json({success: false, message: 'Data not found.'})
        }
    } catch (error) {
        res.status(400).json({success: false, message: 'Edit Error', error})
    }
}

module.exports.edit = async (req, res)=> {
    try {

        const editimage = await Admin.findById(req.query.id)
  
        if(editimage.image){
            const oldImage = path.join(__dirname, '../Images/Admin/', editimage.image)
            if(fs.existsSync(oldImage)){
                fs.unlinkSync(oldImage)
            }
        }

            req.body.image = req.file.filename      
        
        const data = await Admin.findByIdAndUpdate(req.query.id, req.body)
        res.status(200).json({success: true, message: 'Profile edited successfully.', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'Profile not edited.', error})
    }
}

module.exports.addcourse = async (req, res)=> {
    try {
        
        req.body.createdAT = moment().format('LLLL')
        
        if(req.file){
            req.body.image = req.file.filename
        }

        const data = await Course.create(req.body)
        res.status(201).json({success: true, message: 'Course created successfully', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'Course adding error', error})
    }
}

module.exports.viewcourse = async (req, res)=> {
    try {
        const data = await Course.find({})
        if(data.lenght <= 0){
            res.status(404).json({success: false, message: 'Course not found'})
        }
        res.status(200).json({success: true, message: 'Data get successfully', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'Course viewing error', error})
    }
}

module.exports.deletecourse = async (req, res)=> {
    try {
        const courseimg = await Course.findById(req.query.id)

        if(courseimg.image){
            const oldImage = path.join(__dirname, '../Images/Course/', courseimg.image)
            fs.unlinkSync(oldImage)
        }

        const data = await Course.findByIdAndDelete(req.query.id)
        res.status(200).json({success: true, message: 'Course deleted successfully', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'Course not deleted', error})
    }
}

module.exports.editcourse = async (req, res)=> {
    try {
        const data = await Course.findById(req.query.id)
        if(data){
            res.status(200).json({success: true, message: 'Data get successfully', data})
        }else{
            res.status(400).json({success: false, message: 'Course data not found'})
        }
    } catch (error) {
        res.status(400).json({success: false, message: 'Course editing error ',error})
    }
}

module.exports.editedcourse = async (req, res)=> {
    try {
        const courseimg = await Course.findById(req.query.id)
        if(courseimg.image){
            const oldImage = path.join(__dirname, '../Images/Course/', courseimg.image)
            fs.unlinkSync(oldImage)
        }
        req.body.image = req.file.filename
        const data = await Course.findByIdAndUpdate(req.query.id, req.body)
        res.status(200).json({success: true, message: 'Course edited successfully.', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'Course not edited', error})
    }
}

module.exports.alluser = async (req, res)=> {
    try {
        const data = await User.find({})
        if(data.lenght <= 0){
            res.status(404).json({success: false, message: 'User not found'})
        }
        res.status(200).json({success: true, message: 'User find successfully', data})
    } catch (error) {
        res.status(400).json({success: false, message: 'User render error : ', error})
    }
}