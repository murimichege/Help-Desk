const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require('../../config/keys')

// load input validation
const  validateRegisterInput= require('../../authentication/register')
const  validateLoginInput = require('../../authentication/login')

// load user model

const User = require('../../models/user')

// route to register
router.post('/register', (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body)


    if(!isValid){
        return res.status(400).json(errors)
    }

    User.findOne({email : req.body.email})
    .then((user) => {
        if(user){
            return res.status(400).json({email : "Email already exists"})
        }
        else {
            const newUser = new User({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            })
 // Hashing the password before saving it to the database
 bcrypt.genSalt(10,(salt,err) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err
        newUser.password = hash;
        newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err))
    })
})
        }
    })
})

// route to login
route.post('/login', (res, req) => {
    const {errors, isValid} = validateLoginInput(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }

    const password = req.body.password
    const email = req.body.email

    // find if email exists
    User.findOne({email})
    .then(user => {
        if(!user)
        {
            return res.status(400).json({emailnotFound: "Email was not found"})
        }

        // check password

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch){
                // user is matched
                // create a new payload
                const payload = {
                    id: user.id,
                    name : user.name
                };
                jwt.sign(
                    payload,
                    keys.secretOrKey
                )
                {
                    expiresIn: 31556926 
                }
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer" + token
                    })
                }
               
            }
            else {
                res.status(400).json({passwordincorrect: "Password Entered is incorrect"})
            }
        })
        // Sign token
     

    })
    
    



})
module.exports = router;