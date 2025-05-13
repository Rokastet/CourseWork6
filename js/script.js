// script.js

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохраненную тему в localStorage (если есть)
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
} else {
    // Если нет сохраненной темы, по умолчанию светлая
    body.classList.add('light-theme'); // Можно явно добавить класс светлой темы, хотя по умолчанию он и так используется
}


themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        // body.classList.add('light-theme'); // Можно добавить и класс светлой темы
        localStorage.setItem('theme', 'light-theme');
    } else {
        // body.classList.remove('light-theme'); // Удалить класс светлой темы, если используете
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});


const hamburgerBtn = document.getElementById('hamburger-toggle');
const mainNav = document.getElementById('main-nav');
// Возможно, вам также понадобится ссылка на body, если вы будете блокировать скролл
// const body = document.body;

if (hamburgerBtn && mainNav) { // Проверяем, что элементы существуют
    hamburgerBtn.addEventListener('click', () => {
        // Переключаем класс для анимации бургера (опционально, если используете стили анимации)
        hamburgerBtn.classList.toggle('is-active');
        hamburgerBtn.classList.toggle('hamburger--cross'); // Пример класса для анимации крестика

        // Переключаем класс для отображения/скрытия меню
        mainNav.classList.toggle('menu-active');

        // Опционально: запретить скроллинг страницы, когда меню открыто
        // body.classList.toggle('no-scroll');
    });

    // Закрытие меню при клике на ссылку внутри (опционально)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('is-active');
            hamburgerBtn.classList.remove('hamburger--cross'); // Удаляем класс анимации
            mainNav.classList.remove('menu-active');
            // body.classList.remove('no-scroll'); // Разрешаем скроллинг
        });
    });
}

// Убедитесь, что существующий код для переключения темы также здесь присутствует.
// ... ваш код для переключения темы ...