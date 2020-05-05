const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3003 });

const history = [];

webSocketServer.on('connection', webSocket => {
    const result = JSON.stringify(history);
    webSocket.send(result);
    //console.log(history);
    webSocket.onmessage = messageEvent => {
        const message = messageEvent.data;
        history.push(message);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    };
});

module.exports = webSocketServer;
