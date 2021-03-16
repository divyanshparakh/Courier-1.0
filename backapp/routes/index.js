var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');
const verify = require('./verifyToken');

var port = process.env.USER || 3000;

var { pool } = require('../db');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Welcome to the Server of Imager' });
});

function validateUser(user) {
  const validEmail = typeof user.email == 'string' &&
                     user.email.trim() != '';
  const validPassword = typeof user.password == 'string' &&
                    user.password.trim() != '' &&
                    user.password.trim().length >= 6;
  return validEmail && validPassword;
}


//Getting Images Now
router.get('/getdeliverymen', async (req, res) => {
    await pool.query( 'SELECT name FROM deliverymanauth', (error, result) => {
      if(error) {
        res.status(500).json({message: 'Server Error'});
      }
      else {
          res.status(200).send(result.rows);
      }
    })
});


router.post('/adddeliveryman', verify, async (req, res) => {
  console.log('Register Pushed');
  let newUser = {name: req.body.name, dob: req.body.dob, email: req.body.email, mobile: req.body.mobile, password: req.body.password};
  if (validateUser(newUser)) {
    console.log('User has valid Credentials');
    try {
      await pool.query(
        'INSERT INTO deliverymanauth (name, dob, email, mobile, password) VALUES ($1, $2, $3, $4, crypt($5, gen_salt(\'bf\')))',
        [newUser.name, newUser.dob, newUser.email,newUser.mobile, newUser.password]
      )
      console.log('Login Created Of Delivery Man with name ' + newUser.name);
      res.status(201).json({message: 'Login Created by ' + newUser.name});
    } catch (e) {
        res.status(409).json({error: 'Duplicate Credentials is Already Present in the Database'});
        console.log('Duplicate Credential(s) present in Database');
    }
  }
  else {
    res.status(500).json({message: 'Invalid Email or Password'});
  }
});

router.post('/addcouriersdata', (req, res) => {
  console.log( req.body );
  res.status(201).json({message: 'Courier Created'});
});

module.exports = router;
