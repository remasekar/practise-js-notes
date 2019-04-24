
const express = require('express')
const app = express()
const port = 3007

app.get('/',function(req,res)
{
    res.send('Hello world')
})

app.listen(port,function()
{
    console.log('listening port', port)
})