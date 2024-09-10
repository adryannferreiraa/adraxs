document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.getElementById('news-section');
    const newsForm = document.getElementById('news-form');

    // Função para carregar notícias
    function loadNews() {
        fetch('http://localhost:5000/api/news')
            .then(response => response.json())
            .then(data => {
                newsSection.innerHTML = ''; // Limpar notícias existentes
                data.forEach(news => {
                    const article = document.createElement('article');
                    article.innerHTML = `
                        <h2>${news.title}</h2>
                        <p>Data: ${new Date(news.date).toLocaleDateString()}</p>
                        <p>${news.content}</p>
                    `;
                    newsSection.appendChild(article);
                });
            })
            .catch(err => console.error('Erro ao carregar notícias:', err));
    }

    // Função para postar uma nova notícia
    newsForm.addEventListener('submit', event => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        fetch('http://localhost:5000/api/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        .then(response => response.json())
        .then(() => {
            loadNews(); // Recarregar notícias após postagem
            newsForm.reset(); // Limpar formulário
        })
        .catch(err => console.error('Erro ao postar notícia:', err));
    });

    loadNews(); // Carregar notícias ao iniciar
});
