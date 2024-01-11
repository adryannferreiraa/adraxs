// Simulação de dados para postagens
const postsData = [
    { user: "Nome1", content: "Conteúdo da postagem 1" },
    { user: "Nome2", content: "Conteúdo da postagem 2" },
    // Adicione mais postagens conforme necessário
];

// Função para exibir postagens na seção de postagens
function exibirPostagens() {
    const postagensSection = document.getElementById("postagens");

    postsData.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const userInfo = document.createElement("p");
        userInfo.textContent = post.user;
        postElement.appendChild(userInfo);

        const postContent = document.createElement("p");
        postContent.textContent = post.content;
        postElement.appendChild(postContent);

        postagensSection.appendChild(postElement);
    });
}

// Simulação de dados para amigos sugeridos
const amigosSugestoesData = ["Amigo1", "Amigo2", "Amigo3"];

// Função para exibir amigos sugeridos na barra lateral
function exibirAmigosSugestoes() {
    const amigosSugestoesSection = document.getElementById("amigos-sugestoes");

    amigosSugestoesData.forEach(amigo => {
        const amigoElement = document.createElement("div");
        amigoElement.classList.add("amigo");

        const amigoNome = document.createElement("p");
        amigoNome.textContent = amigo;
        amigoElement.appendChild(amigoNome);

        amigosSugestoesSection.appendChild(amigoElement);
    });
}