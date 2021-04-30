const express = require('express')
const bodyParser = require('body-parser')
const Patients = require('../models/Patients')

const patientsRouter = express.Router();

patientsRouter.use(bodyParser.json());

patientsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Patients.find({})
            .then((Patients) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Patients);
            }, (err) => next(err))
            .catch((err) => next(err))
    
    })
    .post((req, res, next) => {

        Patients.findOne({ password: req.body.password, telnum: req.body.telnum })
            .then((Patients) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Patients);
            }, (err) => next(err))
            .catch((err) => next(err))
    
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /Patients');
    })
    .delete((req, res, next) => {
        Patients.remove({})
            .then((Patients) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Patients);
            }, (err) => next(err))
            .catch((err) => next(err))
    });

patientsRouter.route('/signup/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .post((req, res, next) => {
        Patients.findOne({ telnum: req.body.telnum })
            .then((Patient) => {
                if (Patient === null) {
                    Patients.create(req.body)
                        .then((newPatient) => {
                            console.log('Patient Created ', newPatient);
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(newPatient);
                        }, (err) => next(err))
                        .catch((err) => next(err));
                }
                else {
                    var Err = new Error('Patient with mobile number ' + req.body.telnum + ' already exists!!! Kindly Login ')
                    next(Err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })


module.exports = patientsRouter;