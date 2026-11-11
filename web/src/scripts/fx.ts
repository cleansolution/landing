/**
 * Premium motion layer (adapted from the Helice Roamza/Xmoox fx).
 * Everything is progressive enhancement: without JS or with reduced motion the
 * page is complete and static. Only transform / opacity / clip-path animate.
 * Loaded lazily by site.ts (first interaction or idle), never on the critical path.
 */
const $$ = <T extends Element = HTMLElement>(s: string, root: ParentNode = document) => [...root.querySelectorAll<T>(s)];
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => matchMedia('(hover: hover) and (pointer: fine)').matches;
const onScroll = (fn: () => void) => {
  let t = false;
  addEventListener('scroll', () => { if (!t) { t = true; requestAnimationFrame(() => { fn(); t = false; }); } }, { passive: true });
  fn();
};

/* Words light up as you scroll through a statement */
function splitWords(root: HTMLElement, cls: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  const words: HTMLElement[] = [];
  nodes.forEach((t) => {
    if (!t.nodeValue?.trim()) return;
    const frag = document.createDocumentFragment();
    t.nodeValue.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
      const w = document.createElement('span');
      w.className = cls;
      w.textContent = part;
      frag.appendChild(w);
      words.push(w);
    });
    t.parentNode!.replaceChild(frag, t);
  });
  return words;
}
function initScrub() {
  const sets = $$('[data-scrub]').map((el) => ({ el, words: splitWords(el, 'sw') }));
  if (!sets.length) return;
  sets.forEach(({ el }) => el.classList.add('sw-ready'));
  onScroll(() => {
    const vh = innerHeight;
    sets.forEach(({ el, words }) => {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
      const lit = Math.round(p * words.length * 1.15);
      words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
    });
  });
}

/* Giant outline text that slides with scroll */
function initScrollX() {
  const els = $$('[data-scroll-x]');
  if (!els.length) return;
  onScroll(() => {
    const vh = innerHeight;
    els.forEach((el) => {
      const r = (el.parentElement || el).getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const speed = Number(el.dataset.scrollX || -0.35);
      el.style.transform = `translate3d(${((r.top - vh) * speed).toFixed(1)}px,0,0)`;
    });
  });
}

/* Parallax layers */
function initParallax() {
  const els = $$('[data-parallax]');
  if (!els.length) return;
  onScroll(() => {
    const vh = innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const off = (r.top + r.height / 2 - vh / 2) * Number(el.dataset.parallax || 0.08);
      el.style.translate = `0 ${(-off).toFixed(1)}px`;
    });
  });
}

/* Cursor effects (desktop only): magnetic CTA, tilt cards, spotlight, floating preview */
function initPointerFx() {
  if (!finePointer()) return;
  $$('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.translate = `${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px ${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px`;
    });
    el.addEventListener('pointerleave', () => { el.style.translate = ''; });
  });
  $$('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt || 5);
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateY(${(px * max).toFixed(2)}deg) rotateX(${(-py * max).toFixed(2)}deg)`;
      el.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`);
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
  $$('[data-spotlight]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--sx', `${e.clientX - r.left}px`);
      el.style.setProperty('--sy', `${e.clientY - r.top}px`);
    });
  });
  $$('[data-hover-list]').forEach((list) => {
    const float = list.querySelector<HTMLElement>('[data-hover-float]');
    if (!float) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.16; cy += (y - cy) * 0.16;
      float.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    list.addEventListener('pointerenter', () => { float.classList.add('is-on'); raf = requestAnimationFrame(loop); });
    list.addEventListener('pointerleave', () => { float.classList.remove('is-on'); cancelAnimationFrame(raf); });
    list.addEventListener('pointermove', (e) => { const r = list.getBoundingClientRect(); x = e.clientX - r.left; y = e.clientY - r.top; });
    $$('[data-hover-item]', list).forEach((item) => item.addEventListener('pointerenter', () => {
      $$('[data-hover-img]', float).forEach((im) => im.classList.toggle('is-active', im.dataset.hoverImg === item.dataset.hoverItem));
    }));
  });
}

/* Horizontal gallery driven by vertical scroll (desktop) */
function initHScroll() {
  const mq = matchMedia('(min-width: 1024px)');
  $$('[data-hscroll]').forEach((sec) => {
    const stage = sec.querySelector<HTMLElement>('[data-hscroll-stage]');
    const track = sec.querySelector<HTMLElement>('[data-hscroll-track]');
    if (!stage || !track) return;
    let dist = 0;
    const update = () => {
      if (!sec.classList.contains('hs-on')) return;
      const p = Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / (dist || 1)));
      track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`;
    };
    const layout = () => {
      track.style.transform = '';
      if (!mq.matches) { sec.classList.remove('hs-on'); sec.style.height = ''; return; }
      sec.classList.add('hs-on');
      dist = Math.max(0, track.scrollWidth - track.clientWidth);
      sec.style.height = `${stage.offsetHeight + dist}px`;
      update();
    };
    layout();
    addEventListener('resize', layout);
    addEventListener('load', layout, { once: true });
    onScroll(update);
  });
}

/* Page progress bar */
function initProgress() {
  const bar = document.querySelector<HTMLElement>('[data-page-progress]');
  if (!bar) return;
  onScroll(() => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? (scrollY / max).toFixed(4) : 0})`;
  });
}

export function initFx() {
  if (reduce()) return;
  initScrub();
  initScrollX();
  initParallax();
  initPointerFx();
  initHScroll();
  initProgress();
}
