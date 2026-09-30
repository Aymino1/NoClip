const $ = s => document.querySelector(s), view = $('#view'), wipe = $('#wipe'), menu = $('#menu'), burger = $('#burger');
const RAW = window.NOCLIP_CATEGORIES, UI = window.NOCLIP_UI;
let lang = 'fr'; try { lang = localStorage.getItem('noclip-lang') || 'fr'; } catch (e) {}
if (!UI.ui[lang]) lang = 'fr';
const t = k => (UI.ui[lang] && UI.ui[lang][k]) || UI.ui.fr[k];
const S = UI.site;
const build = () => RAW.map(c => ({ slug: c.slug, card: c.card || `assets/img/${c.slug}-card.jpg`, banner: c.banner || `assets/img/${c.slug}-banner.jpg`, ...c.fr, ...(c[lang] || {}) }));
let CATS = build();
const THEMES = [['#00004d', '#3a4bff'], ['#0a0a6e', '#5a6bff'], ['#000066', '#2f7bff'], ['#12128f', '#7b8bff'], ['#00003a', '#3d5cff'], ['#050580', '#4d7dff']];
const th = i => { const [a, b] = THEMES[i % THEMES.length]; return `--c1:${a};--c2:${b};--glow:${a}99`; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const inline = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

// Markdown simplifié -> HTML
function md(t) {
  let out = '', p = [], ul = [];
  const flush = () => { if (p.length) out += `<p>${inline(p.join(' '))}</p>`; p = []; if (ul.length) out += `<ul>${ul.map(x => `<li>${inline(x)}</li>`).join('')}</ul>`; ul = []; };
  for (const raw of t.trim().split('\n')) {
    const l = raw.trim(); let m;
    if (!l) flush();
    else if ((m = l.match(/^(#{1,3}) (.*)/))) { flush(); out += `<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`; }
    else if (l === '---') { flush(); out += '<hr>'; }
    else if (l.startsWith('> ')) { flush(); out += `<blockquote>${inline(l.slice(2))}</blockquote>`; }
    else if (l.startsWith('- ')) { if (p.length) flush(); ul.push(l.slice(2)); }
    else { if (ul.length) flush(); p.push(l); }
  }
  flush(); return out;
}

const FROND = '<path d="M0 0C90-70 210-70 310 20C220-10 110-14 0 0Z"/><path d="M0 0C60-110 170-150 290-100C190-100 90-70 0 0Z"/><path d="M0 0C10-130 90-210 200-220C120-170 60-110 0 0Z"/><path d="M0 0C110-30 230 0 300 90C210 40 100 20 0 0Z"/><path d="M0 0C70 20 160 80 200 170C130 100 60 60 0 0Z"/>';
const palms = (k = 4) => `<div class="palms">${['p1', 'p2', 'p3', 'p4'].slice(0, k).map(c => `<svg class="${c}" viewBox="0 -240 320 420">${FROND}</svg>`).join('')}</div>`;
let seed = 5; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
function skyline(k) { seed = 9 + k; let x = 0, d = ''; while (x < 1600) { const w = 28 + rnd() * 55, h = 40 + rnd() * 200; d += `<rect x="${x}" y="${300 - h}" width="${w}" height="${h}"/>`; x += w + 3; } return `<svg class="sil" viewBox="0 0 1600 300" preserveAspectRatio="none" fill="#00000f">${d}</svg>`; }
// Décor par défaut (ciel + skyline + palmiers). Si assets/img/<img> existe, l'image le remplace automatiquement.
const art = (k, pal = 4, img = '') => `<div class="sky"></div>${skyline(k)}${palms(pal)}${img ? `<img class="bgimg" src="${img}" alt="" onload="this.parentElement.classList.add('has-img')" onerror="this.remove()"><div class="shade"></div>` : ''}`;

const footer = () => `<footer><div class="fn">${esc(S.name)}</div><p>Made by <b>${esc(S.author)}</b></p><p>Copyright ${S.year} ®</p></footer>`;
function home() {
  view.innerHTML = `<section class="hero" style="${th(0)}">${art(0, 4, UI.hero || 'assets/img/hero.jpg')}<div class="wm"><h1>NoClip</h1><p>${t('tagline')}</p></div><div class="scroll">${t('scroll')}</div></section>
  <div class="intro rv"><h2>${t('intro')}</h2></div>
  ${CATS.map((c, i) => `<section class="cat rv"><a class="art" href="#/${c.slug}" style="${th(i)}">${art(i + 1, 2, c.card)}<span class="tag">${esc(c.title)}</span></a>
    <div><h3>${esc(c.quote)}</h3><p>${esc(c.summary)}</p><a class="btn" href="#/${c.slug}">${t('read')} ${esc(c.title)}</a></div></section>`).join('')}
  ${footer()}`;
  requestAnimationFrame(() => setTimeout(() => view.querySelector('.hero').classList.add('go'), 60));
}
function category(slug) {
  const i = CATS.findIndex(c => c.slug === slug), c = CATS[i], nx = CATS[(i + 1) % CATS.length];
  if (!c) return view.innerHTML = `<section class="ph go" style="${th(0)}"><h1>404</h1><p class="q">${t('nf')}</p></section><a class="next" href="#/"><small>${t('back')}</small><span>${t('home')}</span></a>`;
  view.innerHTML = `<section class="ph" style="${th(i)}">${art(i + 1, 4, c.banner)}<h1>${esc(c.title)}</h1><p class="q">${esc(c.quote)}</p></section>
  <article>${md(c.content)}</article>
  <a class="next" href="#/${nx.slug}"><small>${t('next')}</small><span>${esc(nx.title)}</span></a>${footer()}`;
  requestAnimationFrame(() => setTimeout(() => view.querySelector('.ph').classList.add('go'), 60));
}
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), { threshold: .12 });
function render() {
  menu.classList.remove('open'); burger.classList.remove('open');
  const slug = location.hash.replace('#/', ''); slug ? category(slug) : home();
  scrollTo({ top: 0, behavior: 'instant' });
  document.querySelectorAll('.rv,article>*').forEach(e => { e.classList.add('rv'); io.observe(e); });
}
let first = true;
function route() {
  if (first) { first = false; return render(); }
  wipe.className = 'in';
  setTimeout(() => { render(); wipe.className = 'out'; setTimeout(() => wipe.className = '', 750); }, 800);
}
menu.onclick = e => { if (e.target === menu) { menu.classList.remove('open'); burger.classList.remove('open'); } };
burger.onclick = () => { menu.classList.toggle('open'); burger.classList.toggle('open'); };
// Langue : bouton en bas à droite
const lang$ = $('#lang'), list = $('#langList');
function chrome() { // textes fixes + direction du texte
  document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('#burger b').textContent = t('menu'); $('#langBtn b').textContent = lang.toUpperCase();
  $('#menuNav').innerHTML = `<a href="#/" style="--i:0">${t('home')}</a>` + CATS.map((c, i) => `<a href="#/${c.slug}" style="--i:${i + 1}">${esc(c.title)}</a>`).join('');
  list.innerHTML = UI.langs.map(l => `<li><button data-l="${l.code}" class="${l.code === lang ? 'on' : ''}" lang="${l.code}">${l.label}</button></li>`).join('');
}
function setLang(l) {
  lang = l; try { localStorage.setItem('noclip-lang', l); } catch (e) {}
  CATS = build(); chrome(); render();
}
$('#langBtn').onclick = e => { e.stopPropagation(); lang$.classList.toggle('open'); };
addEventListener('click', () => lang$.classList.remove('open'));
list.onclick = e => {
  const b = e.target.closest('button'); if (!b || b.dataset.l === lang) return;
  lang$.classList.remove('open'); wipe.className = 'in';
  setTimeout(() => { setLang(b.dataset.l); wipe.className = 'out'; setTimeout(() => wipe.className = '', 750); }, 800);
};
chrome(); addEventListener('hashchange', route); render();
