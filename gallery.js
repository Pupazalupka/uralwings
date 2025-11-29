const gallery = document.getElementById('gallery-list');
const leftBtn = document.getElementById('left-button');
const rightBtn = document.getElementById('right-button');
const images = document.querySelectorAll('#gallery-list img');

let currentIndex = 0;
const imageWidth = gallery.clientWidth;

function updateGallery() {
    gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
});

rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
});

// Инициализация
updateGallery();