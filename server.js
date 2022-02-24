const path =require('path');
const http =require('http');
const express =require('express');
const socketio =require('socket.io');

const app=express();
const server=http.createServer(app);
const io =socketio(server);

//set static
app.use(express.static(path.join(__dirname,'public')));

//run
io.on('connection', socket =>{
     console.log('New WS Connection');
     socket.emit('message','Welcome to chart');
});
const PORT=3000|| process.env.PORT;
app.listen(PORT, ()=>console.log('server running on port '+PORT));