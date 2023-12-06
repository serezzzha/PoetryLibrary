// Получаем сохраненную информацию о книге из localStorage
const storedBookInfo = localStorage.getItem('currentBook');
if (storedBookInfo) {
    const bookInfo = JSON.parse(storedBookInfo);

    // Отображаем информацию о книге
    const bookInfoContainer = document.getElementById('bookInfo');
    bookInfoContainer.innerHTML = `<h2>${bookInfo.title}</h2><pre>${bookInfo.text}</pre><pre>${bookInfo.text2}</pre>`;
}
