document.addEventListener('DOMContentLoaded', function () {
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const database = firebase.database();
    const storage = firebase.storage();

    const feedSection = document.getElementById('feed');
    const uploadModal = document.getElementById('uploadModal');
    const closeModalBtn = document.getElementById('closeModal');
    const imageInput = document.getElementById('imageInput');
    const captionInput = document.getElementById('captionInput');
    const uploadForm = document.getElementById('uploadForm');
    const logoutBtn = document.getElementById('logoutBtn');

    let currentUser;

    auth.onAuthStateChanged(user => {
        if (user) {
            currentUser = user;
            showFeed();
        } else {
            window.location.replace("login.html"); // Redireciona para a página de login
        }
    });

    function showFeed() {
        // Implemente a lógica para carregar as postagens do usuário do banco de dados aqui
        // Use a função createPostElement(post) para criar elementos HTML para cada postagem
    }

    function createPostElement(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const imgElement = document.createElement('img');
        imgElement.src = post.imageUrl;
        imgElement.alt = 'Imagem do post';

        const postInfoElement = document.createElement('div');
        postInfoElement.classList.add('post-info');

        const usernameElement = document.createElement('h2');
        usernameElement.innerText = post.username;

        const captionElement = document.createElement('p');
        captionElement.innerText = post.caption;

        postInfoElement.appendChild(usernameElement);
        postInfoElement.appendChild(captionElement);

        postElement.appendChild(imgElement);
        postElement.appendChild(postInfoElement);

        feedSection.appendChild(postElement);
    }

    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const imageFile = imageInput.files[0];
        const caption = captionInput.value;

        if (imageFile && caption) {
            uploadImage(imageFile, caption);
        }
    });

    logoutBtn.addEventListener('click', function () {
        auth.signOut().then(() => {
            window.location.replace("login.html"); // Redireciona para a página de login
        });
    });

    function uploadImage(imageFile, caption) {
        // Implemente a lógica para fazer upload da imagem para o Firebase Storage e salvar os detalhes no banco de dados
    }

    function openModal() {
        uploadModal.style.display = 'block';
    }

    function closeModal() {
        uploadModal.style.display = 'none';
    }

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function (event) {
        if (event.target === uploadModal) {
            closeModal();
        }
    });
});
