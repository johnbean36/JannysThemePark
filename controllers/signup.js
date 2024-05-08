
const express = require('express')
const User = require('../models/User')
import {hashPassword, comparePassword, createToken} from require('../middleware/index') 

async function create(req, res, next){
    try{
        let hashedPassword = hashPassword(req.body.password);
        await User.create({
            username: req.body.username,
            password: hashedPassword
        })
    }catch(error){
        res.status(400).json(error);
    }
}

module.exports = {
    create
}