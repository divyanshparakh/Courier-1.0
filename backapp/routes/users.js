require("dotenv").config();
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Joi  = require('@hapi/joi');
const { Pool, Client } = require('pg');

var { pool } = require('../db');

const RegisterUserSchema = Joi.object({
  name: Joi.string()
        .min(3)
        .required(),
  dob: Joi.required(),
  email: Joi.string()
        .min(6)
        .email()
        .required(),
  password: Joi.string()
            .min(6)
            .required()
});

/* GET users listing. */

router.post('/register', async (req, res) => {
  var Validated  = RegisterUserSchema.validate(req.body);
  if (Validated.error == null) {
    try {
      await pool.query(
        'INSERT INTO auth (name, dob, email, password) VALUES ($1, $2, $3, crypt($4, gen_salt(\'bf\')))',
        [Validated.value.name, Validated.value.dob, Validated.value.email, Validated.value.password]
      )
      console.log('Login Created by ' + Validated.value.name);
      res.status(201).json({message: 'Login Created by ' + Validated.value.name});
    } catch (e) {
        res.status(409).json({message: 'Duplicate Credentials is Already Present in the Database'});
        console.log('Duplicate Credential(s) present in Database');
    }
  }
  else {
    console.log(Validated.error.ValidationError);
    res.status(500).json(error.details[0]);
  }
});


function validateUser(user) {
  const validEmail = typeof user.email == 'string' &&
                     user.email.trim() != '';
  const validPassword = typeof user.password == 'string' &&
                    user.password.trim() != '' &&
                    user.password.trim().length >= 6;
  return validEmail && validPassword;
}

router.post('/login', (req, res) => {
  let user = {email: req.body.email, password: req.body.password};
  if (validateUser(user)) {
    pool.query(
      'SELECT * FROM auth WHERE email = ($1) AND password = crypt(($2), password)',
      [user.email, user.password],
    )
    .then( (results) => {
      if(results.rows.length >= 1) {
        const token = jwt.sign({ name: results.rows[0].name, email: results.rows[0].email }, new Buffer( process.env.TOKEN_SECRET, 'base64' ), { expiresIn: 300 }, { algorithms: ['HS512'] });
          // const verified = jwt.verify(token, process.env.TOKEN_SECRET);
          // console.log( verified );
        console.log(results.rows[0].name + ' Logged In');
        res.header('Authorization', `Bearer ${token}` );
        res.status(200).json({message: "Welcome! " + results.rows[0].name });
      }
    },
    ( error ) => {
      res.status(401).json({message: 'User Not Found'});
    }
   )
  }
  else {
    res.status(401).json({message: 'Invalid Credentials'});
  }
  // res.end();
});

module.exports = router;
