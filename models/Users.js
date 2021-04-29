const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name:{
        require : true,
        type : String
    },
    address:{
        require : true,
        type : String
    },
    yob:{
        require : true,
        type : Number
    },
    gender :{
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
    }
})

const Users = mongoose.model('User',UsersSchema)

module.exports = Users