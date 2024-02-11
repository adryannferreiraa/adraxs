let code;
let socket;

function connect() {
    code = document.getElementById('code-input').value;
    socket = new WebSocket(`ws://localhost:3000?code=${code}`);
    
    socket.onmessage = (event) => {
        const receivedMessage = event.data;
        alert(`Mensagem Recebida: ${receivedMessage}`);
    };

    socket.onclose = () => {
        alert('Conexão fechada. Reconecte para continuar.');
    };
}

function sendMessage() {
    const message = document.getElementById('message-input').value;
    if (socket && socket.readyState === WebSocket.OPEN) {
        const payload = { code, content: message };
        socket.send(JSON.stringify(payload));
    } else {
        alert('Você não está conectado. Conecte-se antes de enviar mensagens.');
    }
}
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = {};

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        const { code, content } = parsedMessage;

        if (clients[code]) {
            clients[code].send(content);
        }
    });

    ws.on('close', () => {
        // Implementar lógica para remover o cliente desconectado, se necessário
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
