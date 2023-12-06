/*Открытие бургер-меню*/
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("burger").addEventListener("click",function (){
        document.querySelector(".header").classList.toggle("open")
    })
})





// Обработчик клика на элементы с классом "book-bg"
document.querySelectorAll('.book-bg').forEach(function(bookBg) {
    bookBg.addEventListener('click', function() {
        bookBg.classList.add('active');
    });
});

// Обработчик клика на элемент с id "back" и тегом "svg"
document.querySelector('#back0 svg').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановка всплытия события
    // Удаление класса "active" у элементов с классом "book-bg"
    document.querySelectorAll('.book-bg.active').forEach(function(bookBg) {
        bookBg.classList.remove('active');
    });
});

// Обработчик клика на элемент с id "back" и тегом "svg"
document.querySelector('#back1 svg').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановка всплытия события
    // Удаление класса "active" у элементов с классом "book-bg"
    document.querySelectorAll('.book-bg.active').forEach(function(bookBg) {
        bookBg.classList.remove('active');
    });
});

// Обработчик клика на элемент с id "back" и тегом "svg"
document.querySelector('#back2 svg').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановка всплытия события
    // Удаление класса "active" у элементов с классом "book-bg"
    document.querySelectorAll('.book-bg.active').forEach(function(bookBg) {
        bookBg.classList.remove('active');
    });
});

// Обработчик клика на элемент с id "back" и тегом "svg"
document.querySelector('#back3 svg').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановка всплытия события
    // Удаление класса "active" у элементов с классом "book-bg"
    document.querySelectorAll('.book-bg.active').forEach(function(bookBg) {
        bookBg.classList.remove('active');
    });
});

// Обработчик клика на элемент с id "back" и тегом "svg"
document.querySelector('#back4 svg').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановка всплытия события
    // Удаление класса "active" у элементов с классом "book-bg"
    document.querySelectorAll('.book-bg.active').forEach(function(bookBg) {
        bookBg.classList.remove('active');
    });
});

// Обработчик клика на элемент с id "back" и тегом "svg"
document.querySelector('#back5 svg').addEventListener('click', function(event) {
    event.stopPropagation(); // Остановка всплытия события
    // Удаление класса "active" у элементов с классом "book-bg"
    document.querySelectorAll('.book-bg.active').forEach(function(bookBg) {
        bookBg.classList.remove('active');
    });
});





// Обработчик клика на элементы с классом "book-bg"
document.querySelectorAll('.book-bg').forEach(function (bookBg, index) {
    bookBg.addEventListener('click', function () {
        const storedBookInfo = localStorage.getItem('currentBook');

        // Очищаем localStorage после отображения информации
        localStorage.removeItem('currentBook');
        // Получаем информацию о книге
        const title = document.getElementById(`add${index + 36}`).innerText;
        const text = document.querySelector(`.p${index + 36}`).innerText;
        const text2 = document.querySelector(`.q${index + 36}`).innerText;

        // Сохраняем информацию о книге в localStorage
        const bookInfo = { title, text, text2 };
        localStorage.setItem('currentBook', JSON.stringify(bookInfo));

        // Удаляем класс 'active' у всех книг
        document.querySelectorAll('.book-bg').forEach(function (book) {
            book.classList.remove('active');
        });

        // Добавляем класс 'active' только к выбранной книге
        bookBg.classList.add('active');

    });
});








// Lermontov.js

// Функция для получения данных из Local Storage
function getFavoritesFromStorage() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

// Функция для сохранения данных в Local Storage
function saveFavoritesToStorage(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Функция для добавления в избранное
// Lermontov.js

function addToFavorites(elementId) {
    const element = document.querySelector(elementId);
    const textToAdd = element.textContent.trim();
    let favorites = getFavoritesFromStorage();

    if (!favorites.includes(textToAdd)) {
        favorites.push(textToAdd);
        saveFavoritesToStorage(favorites);
        Swal.fire('Добавлено!', 'Стих добавлен в избранное!', 'success');
    } else {
        Swal.fire('Уже в избранном!', 'Этот стих уже в избранном!', 'warning');
    }
}

function clearFavorites() {
    Swal.fire({
        title: 'Очистить избранное?',
        text: 'Вы уверены, что хотите очистить избранное?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да, очистить!',
        cancelButtonText: 'Отменить',
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('favorites');
            Swal.fire('Очищено!', 'Избранное успешно очищено.', 'success');
        }
    });
}








