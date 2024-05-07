const express = require('express')
const Ticket = require('../models/Ticket')

async function create(req, res, next){
    try{
        res.json(await Ticket.create(req.body));
    }catch(err){
        res.status(400).json(error);
    }
}

async function viewId(req, res, next){
    try{
        res.json(await Ticket.findById(req.params.id))
    }catch(error){
        res.status(400).json(error);
    }
}

module.exports = {
    create,
    viewId
}