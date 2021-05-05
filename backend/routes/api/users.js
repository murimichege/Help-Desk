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
    const {error, isValid} = validateRegisterInput(req.body)

    if(!isValid){
        return res.status(400).json(errors)
    }

    User.findOne({email : req.body.email})
    .then(() => {
        if(user){
            return res.status(400).json({email : "Email already exists"})
        }
        else {
            const user = new User({
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            })
        }
    })

})