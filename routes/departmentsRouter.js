const express = require('express')
const bodyParser = require('body-parser')
const Departments = require('../models/Departments')

const departmentsRouter = express.Router();

departmentsRouter.use(bodyParser.json());

departmentsRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Departments.find({})
            .then((departments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(departments);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        Departments.create(req.body)
            .then((newdepartment) => {
                console.log('department Created ', newdepartment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(newdepartment);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /departments');
    })
    .delete((req, res, next) => {
        Departments.remove({})
            .then((departments) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(departments);
            }, (err) => next(err))
            .catch((err) => next(err))
    });

module.exports = departmentsRouter;