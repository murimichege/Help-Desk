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