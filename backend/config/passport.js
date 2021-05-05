const JWTStrategy = require("passport-jwt").Strategy
const ExtractJWT = require("passport-jwt").ExtractJWT
const mongoose = require("mongoose")
const User = mongoose.model("user")
const keys = require("./keys")


const opts = {}