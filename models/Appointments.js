const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AppointmentsSchema = new Schema({
    userId:{
        require : true,
        type : String
    },
    docId:{
        require : true,
        type : String
    },
    date:{
        require : true,
        type : Number
    },
    time:{
        require : true,
        type: Number
    },
    status:{
        require : true,
        type : String
    },
    prescription:{
        type: String
    }
})

const Appointments = mongoose.model('Appointment',AppointmentsSchema)

module.exports = Appointments