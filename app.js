const express = require('express')
const app = express()

app.get('/', (_, res) => {
    res.send('Version 1!')
})

app.listen(3000)