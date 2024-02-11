let code;
let socket;

function connect() {
    code = document.getElementById('code-input').value;
    socket = new WebSocket(`ws://localhost:3000?code=${code}`);
    
    socket.onopen = () => {
        alert('Conectado com sucesso!');
    };

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
        socket.send(message);
    } else {
        alert('Você não está conectado. Conecte-se antes de enviar mensagens.');
    }
}
