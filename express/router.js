const router = require('express').Router();
const {
    loginAuth,
    logoutAuth,
    signupAuth
}=require('./authController');

//Router starts
router.get('/login',loginAuth);

router.get('/logout',logoutAuth);

router.get('/signup',signupAuth);
//Router ends

module.exports = router;