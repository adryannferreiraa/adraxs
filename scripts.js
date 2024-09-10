document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.getElementById('news-section');

    fetch('http://localhost:5000/api/news')
        .then(response => response.json())
        .then(data => {
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
});
