const text = ['First mem', 'Second mem', 'Third mem', 'Fourth mem'];

document.addEventListener('DOMContentLoaded', () => {
  const memTextElement = document.querySelector('.mem-text');
  const buttons = document.querySelectorAll('.manual-btn');

 
  memTextElement.textContent = text[0]; 
  memTextElement.classList.add('show');

  // Обрабатываем клики по кнопкам
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.manual-btn').forEach(btn => btn.classList.remove('clicked'));
      button.classList.add('clicked');
      memTextElement.classList.remove('show');
      memTextElement.textContent = text[index];
      setTimeout(() => {
        memTextElement.classList.add('show');
      }, 200); 
    });
  });
});