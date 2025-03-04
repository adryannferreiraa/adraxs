/* Resetando algumas propriedades básicas */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Cor de fundo e centralização do conteúdo */
body {
    background-color: #f4f4f4;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

/* Estilo do container do login */
.login-container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

/* Estilo da logo */
.logo {
    width: 150px; /* Ajuste o tamanho da imagem para algo mais profissional */
    height: auto;
    margin-bottom: 20px;
}

/* Estilo do título */
h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

/* Estilo dos campos de entrada */
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
}

/* Estilo do botão */
button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

/* Efeito de hover para o botão */
button:hover {
    background-color: #0056b3;
}

/* Estilo da mensagem de erro */
#erro {
    margin-top: 10px;
    color: red;
    font-size: 14px;
}

