const axios = require('axios');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { authenticate } = require('../auth/authenticate');
const secret = require("../auth/secret")
const Users = require("../auth/authenticate")

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(user=>{
      res.status(201).json({successMessage: "SUCCESS in registering"})
    })
    .catch(err=>{
      res.status(500).json({errorMessage:"ERROR occurred when registering"})
    })  
}

function login(req, res) {
  let {username, password} = req.body;

  Users.findBy({username})
    .first()
    .then(user=>{
      if(user && bcrypt.compareSync(password,user.password)){
        const token = generateToken(user);

        res.status(200).json({welcomeMessage: "welcome, enjoy the dad jokes",token})
      }else{
        res.status(401).json({errorMessage:"error, username and password don't work"})
      }
    })
    .catch(err=>{
      res.status(500).json({errorMessage:"unable to register account "})
    })
}

function generateToken(user){
  const payload = {
    subject: user.id,
    username: user.username
  }
  const options = {
    expiresIn: "2h"
  }
  return jwt.sign(payload,secret,options)
}


function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
