const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestimonialsSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
})

const Testimonials = mongoose.model('Testimonial',TestimonialsSchema);

module.exports = Testimonials;