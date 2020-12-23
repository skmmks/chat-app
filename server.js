const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
