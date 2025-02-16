// const io = require('socket.io')(3000)


var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat-message', (data)=>{
        io.emit("chat-message", data) 
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });
  

http.listen(3000, () => {
  console.log('listening on *:3000');
});