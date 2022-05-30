const express = require('express')

const u_router = express.Router()
const userSchema = require('../models/users')



u_router.post('/', (req, res) => {

    const user = userSchema(req.body)
    
    user.save().then((data) => res.json(data)).catch((e) => res.send(e))
    
     
})



module.exports = u_router

