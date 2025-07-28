document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  const button = document.getElementById('enter-btn');

  button.addEventListener('click', () => {
    splash.style.display = 'none';
  });
});
