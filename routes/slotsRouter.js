const express = require('express')
const bodyParser = require('body-parser')
const Slots = require('../models/Slots')

const slotsRouter = express.Router();

slotsRouter.use(bodyParser.json());

slotsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        Slots.findOne({ did: req.body.did })
            .then((slot) => {
                if (slot === null) {
                    var err = new Error('No slot allocated for this doctor with did :' + req.body.did)
                    next(err)
                }
                else {
                    res.json(slot);
                }
            }, (err) => next(err))
            .catch(err => next(err))
    })
    .post((req, res, next) => {
        Slots.findOne({ did: req.body.did })
            .then((slot) => {
                if (slot === null) {
                    var err = new Error('No slot allocated for this doctor with did :' + req.body.did)
                    next(err)
                }
                else {
                    res.json(slot);
                }
            }, (err) => next(err))
            .catch(err => next(err))
    })
    .put((req, res, next) => {
        Slots.findOne({ did: req.body.did })
            .then((slot) => {
                if (slot === null) {
                    var err = new Error('No slot allocated for this doctor with did :' + req.body.did)
                    next(err)
                }
                else {
                    if(req.body.slotno === "slot1")
                    {
                        slot.slot1 = slot.slot1-1;
                    }
                    else if(req.body.slotno === "slot2")
                    {
                        slot.slot2 = slot.slot2-1;
                    }
                    else if(req.body.slotno === "slot3")
                    {
                        slot.slot3 = slot.slot3-1;
                    }
                    else if(req.body.slotno === "slot4")
                    {
                        slot.slot4 = slot.slot4-1;
                    }
                    else if(req.body.slotno === "slot5")
                    {
                        slot.slot5 = slot.slot5-1;
                    }
                    else if(req.body.slotno === "slot6")
                    {
                        slot.slot6 = slot.slot6-1;
                    }
                    slot.save()
                    .then((slot) => {
                        res.json(slot);
                    },err => next(err))
                    .catch(err => next(err))
                    
                }
            }, (err) => next(err))
            .catch(err => next(err))
    })
    .delete((req, res, next) => {
        Slots.remove({ did: req.body.did })
            .then((slot) => {
                res.json(slot)
            }, (err) => next(err))

            .catch(err => next(err))
    })


slotsRouter.route('/all/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        Slots.find({})
            .then((slot) => {
                if (slot === null) {
                    var err = new Error('No slot available !!! ')
                    next(err)
                }
                else {
                    res.json(slot);
                }
            }, (err) => next(err))
            .catch(err => next(err))
    })
    .post((req, res, next) => {
        Slots.findOne({ did: req.body.did })
            .then((slot) => {
                if (slot === null) {
                    Slots.create(req.body)
                        .then((slot) => {
                            res.json(slot)
                        }, (err) => next(err))
                        .catch(err => next(err))
                }
                else {
                    res.json(slot);
                }
            }, (err) => next(err))
            .catch(err => next(err))
    })
    .put((req, res, next) => {
        res.statusCode=500
        res.end("PUT not Supported on ./slots/all")
    })
    .delete((req, res, next) => {
        Slots.remove({})
            .then((slots) => {
                res.json(slots)
            }, (err) => next(err))
            .catch(err => next(err))
    })

module.exports = slotsRouter