const http = require('http')
const port = 3000

const server = http.createServer(function(req,res)
{
    if ( req.url = "/")
    {
        res.end('helloo')
    }
})

server.listen(port,function () {
    console.log("listening",port)
})