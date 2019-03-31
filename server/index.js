require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db set!')
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/inventory', ctrl.read)
app.post('/api/workout', ctrl.create)
app.put('/api/workout/:id', ctrl.update)
app.delete('/api/workout/:id', ctrl.delete)


app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`)
})