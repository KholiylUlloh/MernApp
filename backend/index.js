const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

//Connect to database
connectDB()

const app = express()

//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api/travel', require('./routes/travelRoutes'))


app.listen(3001, console.log(`Server listening on port: 3001`))