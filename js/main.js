/*Открытие бургер-меню*/
document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("burger").addEventListener("click",function (){
        document.querySelector(".header").classList.toggle("open")
    })
})

/*Слайдер*/
document.addEventListener('DOMContentLoaded', function() {

    const showSlider = new Swiper('.showcase-carousel', {
        loop: true,
        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev',
        },
    })

})

/*localStorage*/
/*function addToFavorites(imageSrc) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(imageSrc);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    /!*alert('Изображение добавлено в избранное!');*!/
}*/

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



// Находим все кнопки по классу
var openPageButtons = document.querySelectorAll('.lyrics');

// Добавляем обработчик события click для каждой кнопки
openPageButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Получаем адрес страницы из атрибута data-url кнопки и открываем новую страницу
        var pageUrl = button.getAttribute('data-url');
        window.location.href = pageUrl;
    });
});

// Находим все кнопки по классу
var openPageButtons2 = document.querySelectorAll('.lyrics2');

// Добавляем обработчик события click для каждой кнопки
openPageButtons2.forEach(function(button) {
    button.addEventListener('click', function() {
        // Получаем адрес страницы из атрибута data-url кнопки и открываем новую страницу
        var pageUrl2 = button.getAttribute('data-url');
        window.location.href = pageUrl2;
    });
});
