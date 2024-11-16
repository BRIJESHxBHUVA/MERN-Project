const express = require('express')
const router = express.Router()
const AdminCtl = require('../Controller/AdminController')
const multer = require('multer')
const { verifyToken } = require('../Middleware/Adminauth')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'Images/Admin')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const coursestorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'Images/Course')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const admin = multer({storage: storage}).single('image')
const courseimg = multer({storage: coursestorage}).single('image')


router.post('/signup', admin ,AdminCtl.addAdmin)
router.get('/editdata', verifyToken ,AdminCtl.editAdmin)
router.put('/edit', verifyToken ,admin, AdminCtl.edit)
router.post('/login', AdminCtl.login)
router.post('/addcourse', verifyToken ,courseimg, AdminCtl.addcourse)
router.get('/course', verifyToken ,AdminCtl.viewcourse)
router.delete('/deletecourse', verifyToken ,AdminCtl.deletecourse)
router.post('/editcourse', verifyToken ,AdminCtl.editcourse)
router.put('/editedcourse', verifyToken ,courseimg ,AdminCtl.editedcourse)

module.exports = router