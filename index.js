// run `node index.js` in the terminal

let http= require('http')

http.createServer((req, res)=>{

  res.writeHead(200, {'content-type':'text/plain'})
  res.write('Hi')

}).listen()
