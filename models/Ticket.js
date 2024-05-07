const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    name: String,
    age: Number,
    date: {type: Date, default: Date.now},
    pass: String
},{timestamps: true})