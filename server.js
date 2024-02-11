const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });

const clients = {};

wss.on('connection', (ws, req) => {
    const code = req.url.split('=')[1];

    clients[code] = ws;

    ws.on('message', (message) => {
        // Você pode adicionar lógica adicional aqui, se necessário
    });

    ws.on('close', () => {
        delete clients[code];
    });
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
