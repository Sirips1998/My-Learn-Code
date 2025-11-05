console.log("Hello, World!");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});

<script>
  const btn = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-links');

  if(btn && menu){
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen); // accessibility
      // optional: animate hamburger to X
      btn.classList.toggle('is-active', isOpen);
    });
  }
</script>
