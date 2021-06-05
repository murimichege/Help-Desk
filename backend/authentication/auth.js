const Validator = require("validator")
const isEmpty = require("is-empty")

module.exports = function validLogInInput(data){

    let errors= {}

    data.email = !isEmpty(data.email) ? data.email : ""
    data.password = !isEmpty(data.password ? data.password : "")

    // Email Check 
    if(Validator.isEmpty(data.email))
    {
        errors.email = "Enter your email";

    } 
     else if(!Validator.isEmpty(data.email)) {
        errors.email = " Email is invalid"
    }


    // check password
    if(Validator.isEmpty(data.password)){
        errors.email = "Enter password"
    }
    return{
        errors,
        isValid : isEmpty(errors)
}
}