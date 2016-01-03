var router = require('express').Router()
var bcrypt = require('bcryptjs')
var User = require('../models/users')

router.post('/',(req,res) => {
  // user =  {username: 'test', email: 'test@test.com', pwd:'test'}
  var user = new User({
    username: req.body.user.username,
    email: req.body.user.email,
    passhash: bcrypt.hashSync(req.body.user.pwd,10)
  })

  user.save().then(
    (newuser) => {
      res.json({
        user: newuser,
        message: 'sucess'
      })
    },
    (err) => {
      res.send(500, err.message)
    }
  )
})

module.exports = router;
