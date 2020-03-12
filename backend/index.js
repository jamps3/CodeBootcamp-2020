const express = require('express')
const fruits = require('./fruits')
const bodyParser = require('body-parser');
const app = express()
    app.use(bodyParser.json());
const port = 4000

app.get('/', (req, res) => res.send('Hello World, I am here'))

app.get('/fruits', (req, res) => 
    fruits.getFruits(req, res))
app.post('/fruits', (req, res) => 
    fruits.addFruit(req, res))
app.delete('/fruits/:id', (req, res) => 
    fruits.removeFruit(req, res))

app.listen(port, () => console.log(`Backend app listening on port ${port}!`))