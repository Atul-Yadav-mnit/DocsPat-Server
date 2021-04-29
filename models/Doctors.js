const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DoctorsSchema = new Schema({
    name:{
        require : true,
        type : String
    },
    dept:{
        require : true,
        type : String
    },
    exp:{
        require : true,
        type : Number
    },
    degree :{
        require : true,
        type : String
    },
    email:{
        require : true,
        type : String
    },
    telnum:{
        require : true,
        type: Number
    },
    password:{
        require : true,
        type : String
    },
    address:{
        require : true,
        type : String
    },
})

const Doctors = mongoose.model('Doctor',DoctorsSchema)

module.exports = Doctors