const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    ticketIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
    password: String
},{timestamps: true})

const User = mongoose.model('Ticket', TicketSchema);

module.exports = User;