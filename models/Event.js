const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    title: {
        type: String
    },
    name: {
        type: String
    },
    discription: {
        type: String
    }
})


module.exports = mongoose.model('Event', EventSchema)