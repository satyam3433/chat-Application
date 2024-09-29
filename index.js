const { Socket } = require('socket.io');

const io = require('socket.io')(8000)

const user = {};

io.on('connection', Socket =>{
   Socket.on('new-user-joined', name =>{
    users[Socket.id] = name;
    Socket.brodcast.emit('user-joined', name)})});

   
     Socket.on('send', message =>{Socket.brodcast.emit('receive', {message: message,name: users[Socket.id]})});

     Socket.on('disconnect', message =>{Socket.brodcast.emit('left', users[socket.id])});
     delete users[socket.id];
     
     

