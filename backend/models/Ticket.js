const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TicketSchema = new Schema({
    Title :{
        name: String,
        required: true
    },
    Department : {
        name: String,
        required: true
    },
    


})

module.exports = Tickets = mongoose.model("Tickets", TicketSchema )