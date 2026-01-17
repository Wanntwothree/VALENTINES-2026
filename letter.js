const background = document.querySelector('.background');

background.addEventListener('click', (e) => {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Position heart at click
  heart.style.left = `${e.clientX - 10}px`;
  heart.style.top = `${e.clientY - 10}px`;

  background.appendChild(heart);

  // Trigger bloom
  setTimeout(() => {
    heart.classList.add('bloom');
  }, 50);

  // Remove after a while to avoid clutter
  setTimeout(() => {
    heart.remove();
  }, 3000);
});
