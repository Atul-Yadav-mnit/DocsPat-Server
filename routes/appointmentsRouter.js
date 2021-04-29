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
            .then((Appointments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Appointments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        Appointments.create(req.body)
            .then((newappointment) => {
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

module.exports = appointmentsRouter;