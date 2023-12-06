// favorites.js

const availableColors = ['#5e4221', '#54a248', '#7e3535', '#8a687c', '#d79741', '#8a8ab2', '#349674', '#ad555d', '#5fb25f'];

function getFavoritesFromStorage() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

function saveFavoritesToStorage(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getRandomColor() {
    // Выбор случайного цвета из массива доступных цветов
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    return availableColors[randomIndex];
}

function updateFavoritesList() {
    const favoritesListElement = document.getElementById('favoritesList');
    const fl = document.getElementById('fl');
    const noFavoritesMessageElement = document.getElementById('noFavoritesMessage');

    if (favoritesListElement && noFavoritesMessageElement) {
        const favorites = getFavoritesFromStorage();

        if (favorites.length === 0) {
            // Если список пуст, скрываем favoritesList и отображаем сообщение
            fl.style.display = 'none';
            noFavoritesMessageElement.style.display = 'block';
        } else {
            fl.style.display = 'block';
            noFavoritesMessageElement.style.display = 'none';

            favoritesListElement.innerHTML = '';

            favorites.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                listItem.style.background = getRandomColor();
                listItem.style.zIndex = '100';
                listItem.style.backgroundImage = 'linear-gradient(to left, transparent, hsl(0 0% 0% / .35))';

                const deleteButton = document.createElement('span');
                deleteButton.textContent = ' ❌';
                deleteButton.style.cursor = 'pointer';

                deleteButton.addEventListener('click', function () {
                    removeFromFavorites(index);
                    updateFavoritesList();
                });

                listItem.appendChild(deleteButton);
                favoritesListElement.appendChild(listItem);
            });
        }
    }
}

function removeFromFavorites(index) {
    const favorites = getFavoritesFromStorage();
    favorites.splice(index, 1);
    saveFavoritesToStorage(favorites);
}

window.onload = function () {
    updateFavoritesList();
};



document.querySelector('video').playbackRate = 2









