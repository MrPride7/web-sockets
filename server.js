const WebSocket = require('ws');

const server = new WebSocket.Server({port: 5000});

server.on('connection', ws => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('Connection is open on browser!');
  console.log('Connection is open on server');
});
