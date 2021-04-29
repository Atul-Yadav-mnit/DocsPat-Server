const express = require('express')
const bodyParser = require('body-parser')
const Doctors = require('../models/Doctors')

const doctorsRouter = express.Router();

doctorsRouter.use(bodyParser.json());

doctorsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Doctors.findOne({ password: req.body.password, telnum: req.body.telnum })
            .then((Doctors) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Doctors);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        Doctors.findOne({ telnum: req.body.telnum })
            .then((Doctor) => {
                if (Doctor === null) {
                    Doctors.create(req.body)
                        .then((newDoctor) => {
                            console.log('Doctor Created ', newDoctor);
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(newDoctor);
                        }, (err) => next(err))
                        .catch((err) => next(err));
                }
                else {
                    var Err = new Error('Doctor with mobile number ' + req.body.telnum + ' already exists!!! Kindly Login ')
                    next(Err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /Doctors');
    })
    .delete((req, res, next) => {
        Doctors.remove({})
            .then((Doctors) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Doctors);
            }, (err) => next(err))
            .catch((err) => next(err))
    });


doctorsRouter.route('/all/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Doctors.find()
            .then((Doctors) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Doctors);
            }, (err) => next(err))
            .catch((err) => next(err))

    })

module.exports = doctorsRouter;