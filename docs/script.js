const socialsButton = document.querySelector('.socials-button');
const socialsMenu = document.querySelector('.socials-menu');

// Показать/скрыть меню
socialsButton.addEventListener('click', () => {
  socialsMenu.classList.toggle('active'); // Добавляем/убираем класс active
});
