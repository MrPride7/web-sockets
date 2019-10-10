const ws = new WebSocket('ws://localhost:5000');

ws.onopen = () => {
  ws.send('Connection is opened');
  console.log('online');
};
ws.onclose = () => {
  console.log('disconnected');
};
ws.onmessage = (resp) => {
  console.log(resp.data);
  ws.close(1000, "Connection is stopped!");
};
ws.onerror = error => console.error(error);