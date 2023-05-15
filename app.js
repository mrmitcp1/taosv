const http = require('http');
const sever = http.createServer((req, res)=>{
    res.write('<h1>Hello</h1><hr>');
    res.end()
})
sever.listen(8000,'localhost');
