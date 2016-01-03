var db = require('mongoose')

db.connect('mongodb://test:test@localhost:27017/workouts')

module.exports = db
