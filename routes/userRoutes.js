const express=require('express')
const router=express.Router()

const userRouter=require('../controller/userController')

router.get('/',userRouter.getHome)
router.get('/signup',userRouter.getSignup)
router.get('/login',userRouter.getLogin)

module.exports=router