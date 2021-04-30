const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AppointmentsSchema = new Schema({
    patId:{
        required : true,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient'
    },
    docId:{
        required : true,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Doctor'
    },
    date:{
        required : true,
        type : String
    },
    slot:{
        required : true,
        type: String
    },
    position:{
        required : true,
        type: Number
    },
    status:{
        required : true,
        type : String
    },
    prescription:{
        type: String
    }
})

const Appointments = mongoose.model('Appointment',AppointmentsSchema)

module.exports = Appointments