// const io = require('socket.io')(3000)
// io.on('connection', (socket)=>{
//     socket.emit('chat-message', 'hello-world')
//     console.log("making sure that it is working..");
// })

var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});