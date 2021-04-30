const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PatientsSchema = new Schema({
    name:{
        required : true,
        type : String
    },
    address:{
        required : true,
        type : String
    },
    yob:{
        required : true,
        type : Number
    },
    gender :{
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
    }
})

const Patients = mongoose.model('Patient',PatientsSchema)

module.exports = Patients