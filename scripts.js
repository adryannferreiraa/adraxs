let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.featured-news article');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function searchNews() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.latest-news article');

    articles.forEach(article => {
        const title = article.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
