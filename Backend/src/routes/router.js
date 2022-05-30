const express = require('express')
const user = require('./user')


const router = express.Router()


router.use('/user', user)

router.get('/', (req, res) => {

    res.json({
        status: {
            code: 200,
            message: 'API is Active'
        }
        
        }
    )

})

module.exports = router