const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects
io.on('connection', (socket) => {
  // Welcome current user
  socket.emit('message', 'Welcome to ChatCord');

  //Broadcast when user enters
  socket.emit('message', 'A user has joined the chat');

  //Broadcast when disconnect
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
