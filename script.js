const archives = [
  ['001','THE FIRST HOUR','A beginning made without announcement.','Vegetable-tanned leather.','Hand finished.','18 months.'],
  ['002','QUIET COMPOUND','Structure for the life that does not perform.','Brushed cotton and horn.','Cut in small rooms.','11 months.'],
  ['003','UNSEEN WORK','Made for effort that never asks to be seen.','Washed canvas.','Reinforced by hand.','14 months.'],
  ['004','STONE PAUSE','Weight, edited until only calm remains.','Portuguese wool.','Pressed for density.','9 months.'],
  ['005','LOW ROOM','A silhouette beneath the noise.','Raw silk.','Bound seams.','16 months.'],
  ['006','PRIVATE WEATHER','Protection without spectacle.','Waxed cotton.','Slow cured.','21 months.'],
  ['007','MORNING OAK','A surface improved by touch.','Oak and linen.','Oil finished.','12 months.'],
  ['008','ABSENT EDGE','The detail noticed only later.','Full-grain hide.','Edge painted six times.','19 months.'],
  ['009','AFTER IMAGE','Memory held in proportion.','Cashmere.','Combed and rested.','15 months.'],
  ['010','THE REMAINDER','What is left when excess is removed.','Paper cotton.','Washed, dried, repeated.','10 months.']
];

document.body.classList.add('is-loading');
const mark = document.querySelector('.loader__mark');
const loader = document.querySelector('.loader');
const first = document.querySelector('.loader__line--first');
const second = document.querySelector('.loader__line--second');
const word = 'TACIT';
mark.textContent = '';
word.split('').forEach((_, index) => setTimeout(() => { mark.textContent = word.slice(0, index + 1); }, 520 * (index + 1)));
setTimeout(() => { mark.style.opacity = 0; first.style.opacity = 1; }, 3800);
setTimeout(() => { first.style.opacity = 0; second.style.opacity = 1; }, 5300);
setTimeout(() => { loader.classList.add('is-finished'); document.body.classList.remove('is-loading'); }, 7100);

const archiveGrid = document.querySelector('.archive__grid');
archiveGrid.innerHTML = archives.map(([number, name, philosophy, material, process, time]) => `
  <article class="archive-card">
    <p class="mono">ARCHIVE ${number}</p>
    <div><h3>${name}</h3><p>${philosophy}</p></div>
    <dl class="mono"><div><dt>Material</dt><dd>${material}</dd></div><div><dt>Process</dt><dd>${process}</dd></div><div><dt>Time</dt><dd>${time}</dd></div></dl>
  </article>`).join('');

const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('is-visible');
}), { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal, .archive-card').forEach(el => observer.observe(el));

const hero = document.querySelector('.hero');
function updateSignature() {
  const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.62)));
  hero.style.setProperty('--vanish', String(1 - progress));
  hero.style.setProperty('--scroll', String(progress));
  hero.style.setProperty('--drift', `${progress * -80}px`);
}
updateSignature();
window.addEventListener('scroll', updateSignature, { passive: true });
