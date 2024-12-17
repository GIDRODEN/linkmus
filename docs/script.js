const socialsButton = document.querySelector('.socials-button');
const socialsMenu = document.querySelector('.socials-menu');
const trackTitle = document.getElementById('track-title');

// Показать/скрыть меню и анимировать только ширину слова "GIDRODEN"
socialsButton.addEventListener('click', () => {
  socialsMenu.classList.toggle('active'); // Открытие/закрытие меню

  // Если меню активно — сжимаем ширину текста, иначе расширяем
  if (socialsMenu.classList.contains('active')) {
    trackTitle.classList.add('shrink');
    trackTitle.classList.remove('expand');
  } else {
    trackTitle.classList.add('expand');
    trackTitle.classList.remove('shrink');
  }
}); 
