document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const chatSection = document.getElementById('chat');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        if (username.trim() !== '') {
            // Usuário logado com sucesso
            showChatSection(username);
        }
    });

    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const message = messageInput.value;
        if (message.trim() !== '') {
            // Adiciona a mensagem ao container
            addMessage(message);
            // Limpa o campo de mensagem
            messageInput.value = '';
        }
    });

    function showChatSection(username) {
        // Atualiza a interface para a seção de chat
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'block';

        // Bem-vindo ao usuário no chat
        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add('system-message');
        welcomeMessage.innerText = `Bem-vindo, ${username}!`;
        messagesContainer.appendChild(welcomeMessage);
    }

    function addMessage(message) {
        // Adiciona a mensagem ao container
        const messageElement = document.createElement('div');
        messageElement.classList.add('user-message');
        messageElement.innerText = message;
        messagesContainer.appendChild(messageElement);

        // Role até o final do container de mensagens
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

