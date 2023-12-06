document.addEventListener('DOMContentLoaded', () => {
    const detailsContainer = document.getElementById('details-container');
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    // Можете использовать index для получения данных из массива favorites и отображения подробной информации
    // Например:
    // const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // const selectedImage = favorites[index];

    // В данном примере мы просто выводим индекс на страницу
    detailsContainer.textContent = `Подробная информация о изображении ${index}`;
});
