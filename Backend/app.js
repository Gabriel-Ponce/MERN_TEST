const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routers = require('./src/routes/router')
const bodyparser = require('body-parser')


const app = express()

dotenv.config()

const PORT = 1208

app.use(cors())

app.use(express.json())

app.use('/api', routers)

app.get('/example', (req, res) => {

    res.set('content-type', 'text/plain')
    res.status(200).send('Express API is Active')

})

app.listen(PORT, () => {

    console.log(`Server is active on port ${PORT}`)
})


mongoose.connect(process.env.MONGO_URI).then(() => {console.log('Web Server has been connected with the database')}).catch((e) => console.error(e))