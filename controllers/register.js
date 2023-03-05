const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const CONSTANTS = require("../config/constant")

const userRegisterController = function(req,res){
    console.log("Regestering the user");
    const userDetails = req.body;
    console.log("Received user details =>",userDetails);
    const password = userDetails.password;
    const roundsalt = 10;
    bcrypt.genSalt(roundsalt,function(err,salt){
        if(err){
            console.log(err);
        }
        else{
            bcrypt.hash(password,salt,function(err,hashedpassword){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("User Registered Successfully..");
                    res.send({"hashedpassword":hashedpassword})
                }
            })
        }
    })
};

module.exports = {userRegisterController};
