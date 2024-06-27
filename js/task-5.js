function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

    // Отримуємо елементи DOM
    const body = document.body;
    const colorSpan = document.querySelector('.color');
    const changeColorButton = document.querySelector('.change-color');

    // Додаємо обробник подій для кнопки
    changeColorButton.addEventListener('click', () => {
      // Генеруємо випадковий колір
      const newColor = getRandomHexColor();

      // Змінюємо колір фону body
      body.style.backgroundColor = newColor;

      // Встановлюємо значення кольору в span
      colorSpan.textContent = newColor;
    });