console.log('Hello, World!');

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
