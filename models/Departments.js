const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name:{
        require : true,
        type: String
    },
    nod:{
        require : true,
        type: Number
    },
    image:{
        require : true,
        type: String
    },
    details:{
        require: true,
        type: String
    }
},{
    timestamps:true
})


const Departments = mongoose.model('Department',DepartmentSchema)

module.exports = Departments