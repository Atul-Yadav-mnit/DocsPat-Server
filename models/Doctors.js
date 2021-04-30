const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DoctorsSchema = new Schema({
    name:{
        required : true,
        type : String
    },
    dept:{
        required : true,
        type : String
    },
    exp:{
        required : true,
        type : Number
    },
    degree :{
        required : true,
        type : String
    },
    email:{
        required : true,
        type : String
    },
    telnum:{
        required : true,
        type: Number
    },
    password:{
        required : true,
        type : String
    },
    address:{
        required : true,
        type : String
    },
    image:{
        required : true,
        type: String
    }
})

const Doctors = mongoose.model('Doctor',DoctorsSchema)

module.exports = Doctors