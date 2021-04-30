const express = require('express')
const bodyParser = require('body-parser')
const Appointments = require('../models/Appointments')

const appointmentsRouter = express.Router();

appointmentsRouter.use(bodyParser.json());

appointmentsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Appointments.find({})
        .populate('patId')
        .populate('docId')
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        console.log("Here at post ", req.body)
        Appointments.create(req.body)
            .then((newappointment) => {
                console.log("new appointments ", newappointment)
                console.log('appointment Created ', newappointment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(newappointment);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /Appointments');
    })
    .delete((req, res, next) => {
        Appointments.remove({})
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))
    });


appointmentsRouter.route('/user/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        console.log("Here at post ", req.body)
        Appointments.create(req.body)
            .then((newappointment) => {
                console.log("new appointments ", newappointment)
                console.log('appointment Created ', newappointment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(newappointment);
            }, (err) => next(err))
            .catch((err) => next(err));
    })


    appointmentsRouter.route('/patients/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Appointments.find({patId : req.body.patId})
        .populate('docId')
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        
        Appointments.find({patId : req.body.patId})
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                console.log(Appointments)
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })


    appointmentsRouter.route('/doctors/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Appointments.find({docId : req.body.docId})
        .populate('patId')
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {

        Appointments.find({docId : req.body.docId})
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })

module.exports = appointmentsRouter;