const socket = io()

socket.on('chat-message', (data)=>{
    console.log(data);
})

alert("hello")
console.log("hi");