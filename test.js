const { User } = require('./src/models')

User.findAll().then(res => console.log(res))