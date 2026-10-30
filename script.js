// Marque la page comme "JS actif" (pour les animations d'apparition)
document.documentElement.classList.add('js');

const header = document.getElementById('header');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const toTop = document.getElementById('toTop');
const welcome = document.getElementById('welcome');

// --- Menu mobile ---
function setMenu(open) {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// --- En-tête, bouton "haut de page" ---
function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 10);
  toTop.hidden = window.scrollY < 600;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// --- Apparition des éléments au défilement ---
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add('visible'));
}

// --- Lien actif dans le menu ---
const links = [...menu.querySelectorAll('a')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

// --- Message de bienvenue (une seule fois par session) ---
try {
  if (!sessionStorage.getItem('welcomed')) {
    welcome.hidden = false;
    setTimeout(() => welcome.classList.add('show'), 600);
    setTimeout(() => { welcome.classList.remove('show'); setTimeout(() => welcome.hidden = true, 500); }, 3800);
    sessionStorage.setItem('welcomed', '1');
  }
} catch (e) { /* stockage indisponible : on n'affiche rien */ }
