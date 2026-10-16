const container = document.querySelector('.particles');
if (container) {
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = Math.random() * 100 + 'vh';
    p.style.animationDuration = (Math.random() * 6 + 6) + 's';
    p.style.animationDelay = (Math.random() * 5) + 's';
    p.style.background = ['#0ff', '#ff00c8', '#9b00ff'][Math.floor(Math.random() * 3)];
    container.appendChild(p);
  }
}

const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

function closeMenu() {
  if (!nav || !toggle) return;
  nav.classList.remove('active');
  toggle.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  if (!nav || !toggle) return;
  const isOpen = nav.classList.toggle('active');
  toggle.classList.toggle('active', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
}

if (toggle && nav) {
  toggle.addEventListener('click', toggleMenu);
  toggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });
}
