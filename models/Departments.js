const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name:{
        required : true,
        type: String
    },
    nod:{
        required : true,
        type: Number
    },
    image:{
        required : true,
        type: String
    },
    details:{
        required: true,
        type: String
    }
},{
    timestamps:true
})


const Departments = mongoose.model('Department',DepartmentSchema)

module.exports = Departments