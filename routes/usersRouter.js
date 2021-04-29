const express = require('express')
const bodyParser = require('body-parser')
const Users = require('../models/Users')

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Users.findOne({ password: req.body.password, telnum: req.body.telnum })
            .then((Users) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Users);
            }, (err) => next(err))
            .catch((err) => next(err))

    })
    .post((req, res, next) => {
        Users.findOne({ telnum: req.body.telnum })
            .then((user) => {
                if (user === null) {
                    Users.create(req.body)
                        .then((newuser) => {
                            console.log('user Created ', newuser);
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(newuser);
                        }, (err) => next(err))
                        .catch((err) => next(err));
                }
                else {
                    var Err = new Error('User with mobile number ' + req.body.telnum + ' already exists!!! Kindly Login ')
                    next(Err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /Users');
    })
    .delete((req, res, next) => {
        Users.remove({})
            .then((Users) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(Users);
            }, (err) => next(err))
            .catch((err) => next(err))
    });

usersRouter.route('/all/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {

        Users.find({})
            .then((users) => {
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            }, (err) => next(err))
            .catch((err) => next(err))

    })


module.exports = usersRouter;