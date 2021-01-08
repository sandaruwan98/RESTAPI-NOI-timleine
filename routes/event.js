const express = require("express")
const Router = express.Router()

const Event = require('../models/Event')

// return all event documents
Router.get('/', async (req,res)=>{
    try {
        const events = await  Event.find();
        res.json(events)

    } catch (error) {
        res.json({err: error});
        
    }
    

})

// return event of given id
Router.get('/:eventid',async (req,res)=>{
    try {
        const event = await Event.findById(req.params.eventid)
        res.json(event)

    } catch (error) {
        res.json({err: error})
    }
})


// add new event document
Router.post('/',async (req,res)=>{
    // console.log(req.body);
    const event = new Event({
        title: req.body.title,
        date: req.body.date,
        discription: req.body.discription,
        regstatus: req.body.regstatus
    })

    try {
        const savedevent = await event.save();
        res.json(savedevent);
        
    } catch (error) {
        res.json({err: error});
    }

})



// delete event of given id
Router.delete('/:eventid',async (req,res)=>{
    try {
        const deletedevent = await Event.remove({_id: req.params.eventid})
        res.json(deletedevent)

    } catch (error) {
        res.json({err: error})
    }
})


// update event name of given id
Router.patch('/:eventid',async (req,res)=>{
    try {
        const updatedevent = await Event.updateOne(
            {_id: req.params.eventid},
            { $set: 
                { 
                    title: req.body.title,
                    date: req.body.date,
                    discription: req.body.discription,
                    regstatus: req.body.regstatus
                } 
            }
        )
        res.json(updatedevent)

    } catch (error) {
        res.json({err: error})
    }
})



module.exports = Router