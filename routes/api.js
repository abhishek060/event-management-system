const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/api', (req,res)=>{
    Event.find({ })
        .then((data) => {
            console.log('Data:', data);
            res.json(data);
        })
        .catch((err) => {
            console.log('Error:', err);
        });
});

router.post('/api/save', (req,res)=>{
    console.log('Body:', req.body);
    const data = req.body;
    const newEvent = new Event(data);
    newEvent.save((error) => {
        if(error){
            res.status(500).json({
                msg: "Internal server error"
            });
        }
        else{
            res.json({
                msg: "Data saved to database!!!"
            });
        }
    })
});

module.exports = router;