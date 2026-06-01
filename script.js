// Функция для подсчёта фотографий
function countPhotos() {
    let photos = document.querySelectorAll('.image-card');
    let counter = document.getElementById('image-counter');
    
    if (counter) {
        counter.textContent = photos.length;
    }
    
    console.log('Найдено фотографий:', photos.length);
}

// Функция для работы с лайками
function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;
    
    // Для каждой кнопки лайка
    likeButtons.forEach(function(button) {
        // При клике на кнопку
        button.addEventListener('click', function() {
            let likesSpan = this.querySelector('.like-count');
            if (!likesSpan) return;
            let currentLikes = parseInt(likesSpan.textContent) || 0;
            
            if (this.classList.contains('liked')) {
                // Убираем лайк
                currentLikes = Math.max(0, currentLikes - 1);
                totalLikes = Math.max(0, totalLikes - 1);
                this.classList.remove('liked');
            } else {
                // Добавляем лайк
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }
            
            // Обновляем счётчики
            likesSpan.textContent = currentLikes;
            if (totalLikesElement) totalLikesElement.textContent = totalLikes;
            
            // Анимация
            this.style.transform = 'scale(1.15)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            console.log('Лайков всего:', totalLikes);
        });
    });
}

// Когда страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    console.log('Галерея загружена!');
    
    countPhotos();
    setupLikes();
    
    // Показываем, что JavaScript работает
    setTimeout(function() {
        console.log('✅ JavaScript работает правильно!');
    }, 1000);
});
