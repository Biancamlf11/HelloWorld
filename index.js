const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get('/package', (req, res) => {
    const numero1 = 1
    const numero2= 3
        res.send('La suma es: '+numero1+numero2)
})
app.get('/package/express', (req, res) => {
        res.send('Hola!!')
})