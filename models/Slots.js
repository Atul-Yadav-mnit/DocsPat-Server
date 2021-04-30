const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SlotsSchema = new Schema({
    did:{
        required : true,
        type : String
    },
    slot1:{
        required : true,
        type : Number
    },
    slot2:{
        required : true,
        type : Number
    }
    ,
    slot3:{
        required : true,
        type : Number
    }
    ,
    slot4:{
        required : true,
        type : Number
    }
    ,
    slot5:{
        required : true,
        type : Number
    },
    slot6:{
        required : true,
        type : Number
    }
})

const Slots = mongoose.model('Slot',SlotsSchema)

module.exports = Slots