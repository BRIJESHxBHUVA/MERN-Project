const express = require('express')
const router = express.Router()
const multer = require('multer')
const UserCtl = require('../Controller/UserController')
const { verifyToken } = require('../Middleware/Userauth')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'Images/User')
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const userimg = multer({storage: storage}).single('image')

router.post('/signup', userimg, UserCtl.signup)
router.post('/login', UserCtl.login)
router.get('/course', verifyToken ,UserCtl.course)
router.get('/edituser', verifyToken ,UserCtl.edituser)
router.put('/edit', verifyToken, userimg ,UserCtl.edit)

module.exports = router