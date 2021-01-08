const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    discription: {
        type: String
    },
    regstatus: {
        type: String
    }
})


module.exports = mongoose.model('Event', EventSchema)