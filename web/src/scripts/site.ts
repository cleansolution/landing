import { track } from './track';

/* Mobile menu */
const toggle = document.querySelector<HTMLButtonElement>('[data-menu]');
const nav = document.getElementById('site-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav?.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.focus();
  }
});

/* Quote links: jump to the page's form, or to /contact/ when there is none. */
if (!document.getElementById('quote')) {
  document.querySelectorAll<HTMLAnchorElement>('[data-quote-link]').forEach((a) => (a.href = '/contact/#quote'));
}

/* Click tracking */
document.addEventListener('click', (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>('[data-track]');
  if (el) track(el.dataset.track!, { link_url: (el as HTMLAnchorElement).href, page: location.pathname });
});

/* Header compacts on scroll */
const header = document.querySelector('.site-header');
const onScroll = () => header?.classList.toggle('is-compact', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* "What needs cleaning?" switcher (WAI-ARIA tabs) */
document.querySelectorAll<HTMLElement>('[data-switcher]').forEach((root) => {
  const tabs = [...root.querySelectorAll<HTMLButtonElement>('[role=tab]')];
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!);
      if (panel) {
        panel.hidden = !on;
        if (on) panel.querySelectorAll('.ticklist').forEach((l) => { l.classList.remove('is-in'); requestAnimationFrame(() => requestAnimationFrame(() => l.classList.add('is-in'))); });
      }
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const k = e.key;
      let n = -1;
      if (k === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (k === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (k === 'Home') n = 0;
      else if (k === 'End') n = tabs.length - 1;
      if (n >= 0) { e.preventDefault(); select(tabs[n], true); }
    });
  });
});

/* Reveal on scroll (movement only) */
const reveals = document.querySelectorAll('.reveal, .ticklist, .process, .wipe, [data-inview]');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  reveals.forEach((r) => io.observe(r));
}

/* Count-up numbers (always on; respects reduced motion). Real value stays in the HTML for crawlers. */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if ('IntersectionObserver' in window && counters.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const cio = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    cio.unobserve(en.target);
    const el = en.target as HTMLElement;
    const to = Number(el.dataset.count);
    const t0 = performance.now();
    const dur = 1400;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) requestAnimationFrame(step);
      else el.closest('.stats2__item, .glass-chip, .about2__badge')?.classList.add('is-done');
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  }), { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));
}

/* ---------- Quote form + Cloudflare Turnstile ---------- */
declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
  }
}

const forms = document.querySelectorAll<HTMLFormElement>('[data-quote-form]');
let tsPromise: Promise<void> | null = null;
function loadTurnstile() {
  tsPromise ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('turnstile'));
    document.head.appendChild(s);
  });
  return tsPromise;
}

const widgetIds = new WeakMap<HTMLFormElement, string>();
async function mountTurnstile(form: HTMLFormElement) {
  if (widgetIds.has(form)) return;
  const slot = form.querySelector<HTMLElement>('[data-turnstile]');
  if (!slot) return;
  widgetIds.set(form, 'pending');
  try {
    await loadTurnstile();
    const id = window.turnstile!.render(slot, { sitekey: form.dataset.sitekey, theme: form.dataset.theme || 'light', size: 'flexible' });
    widgetIds.set(form, id);
  } catch {
    widgetIds.delete(form);
  }
}

const mountAll = () => forms.forEach(mountTurnstile);
if (forms.length) {
  forms.forEach((f) => f.addEventListener('focusin', () => mountTurnstile(f), { once: true }));
  // Load on the visitor's first interaction (scroll, touch, mouse, key): the
  // checkbox is ready before they reach "Submit" and first paint stays light.
  const events = ['scroll', 'pointerdown', 'pointermove', 'touchstart', 'keydown'];
  const first = () => {
    events.forEach((ev) => removeEventListener(ev, first));
    mountAll();
  };
  events.forEach((ev) => addEventListener(ev, first, { once: true, passive: true }));
}

const phoneOk = (v: string) => v.replace(/\D/g, '').length >= 10;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

forms.forEach((form) => {
  const status = form.querySelector<HTMLElement>('.form-status')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;

  const setError = (name: string, msg: string) => {
    const input = form.elements.namedItem(name) as HTMLInputElement | null;
    if (!input) return;
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    const err = input.parentElement?.querySelector<HTMLElement>('.field__error');
    if (err) err.textContent = msg;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const checks: [string, boolean, string][] = [
      ['fullName', !!data.fullName?.trim(), 'Please enter your name.'],
      ['phone', phoneOk(data.phone || ''), 'Please enter a valid phone number.'],
      ['email', emailOk(data.email || ''), 'Please enter a valid email.'],
      ['service', !!data.service, 'Please choose a service.'],
    ];
    let first: string | null = null;
    for (const [name, ok, msg] of checks) {
      setError(name, ok ? '' : msg);
      if (!ok && !first) first = name;
    }
    if (first) {
      (form.elements.namedItem(first) as HTMLElement).focus();
      return;
    }
    const token = data['cf-turnstile-response'];
    if (!token) {
      mountTurnstile(form);
      status.dataset.state = 'error';
      status.textContent = 'Please check the “Verify you are human” box above.';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.dataset.state = '';
    status.textContent = '';

    try {
      if (form.dataset.mode === 'live') {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(String(res.status));
      }
      track('generate_lead', { service: data.service, city: data.city, mode: form.dataset.mode });
      location.href = form.dataset.mode === 'live' ? '/thank-you/' : '/thank-you/?demo=1';
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'We could not send your request. Please call us or try again.';
      const id = widgetIds.get(form);
      if (id && id !== 'pending') window.turnstile?.reset(id);
      btn.disabled = false;
      btn.textContent = 'Submit Request';
    }
  });
});

/* ---------- Hero video: sources attached after load; pausable; respects reduced motion + data saver ---------- */
(() => {
  const v = document.querySelector<HTMLVideoElement>('[data-hero-video]');
  if (!v) return;
  const btn = document.querySelector<HTMLButtonElement>('[data-hero-video-toggle]');
  const label = btn?.querySelector('[data-label]');
  let ready = false;
  const attach = () => {
    if (ready) return;
    ready = true;
    v.querySelectorAll<HTMLSourceElement>('source[data-src]').forEach((s) => (s.src = s.dataset.src!));
    v.load();
  };
  const set = (playing: boolean) => {
    if (playing) { attach(); v.play().catch(() => {}); } else v.pause();
    btn?.setAttribute('aria-pressed', String(!playing));
    if (label) label.textContent = playing ? 'Pause video' : 'Play video';
  };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData;
  if (reduced || saveData) set(false);
  else if (matchMedia('(max-width: 767.98px)').matches) {
    // Phones: the poster shows first; the loop starts on the first touch/scroll (saves data and CPU).
    set(false);
    btn?.setAttribute('aria-pressed', 'false');
    const evs = ['scroll', 'touchstart', 'pointerdown', 'keydown'];
    const once = () => { evs.forEach((e) => removeEventListener(e, once)); set(true); };
    evs.forEach((e) => addEventListener(e, once, { passive: true }));
  } else {
    const go = () => setTimeout(() => set(true), 400);
    if (document.readyState === 'complete') go(); else addEventListener('load', go, { once: true });
  }
  v.addEventListener('playing', () => v.classList.add('is-playing'), { once: true });
  btn?.addEventListener('click', () => set(v.paused));
  new IntersectionObserver(([en]) => {
    if (!ready || btn?.getAttribute('aria-pressed') === 'true') return;
    if (en.isIntersecting) v.play().catch(() => {}); else v.pause();
  }).observe(v);
})();

/* ---------- Premium effects: loaded off the critical path ---------- */
(() => {
  let done = false;
  const load = () => {
    if (done) return;
    done = true;
    ['scroll', 'pointermove', 'touchstart', 'keydown'].forEach((e) => removeEventListener(e, load));
    import('./fx').then((m) => m.initFx());
  };
  // Only on real interaction: content is complete without it, and first load stays light.
  ['scroll', 'pointermove', 'touchstart', 'keydown'].forEach((e) => addEventListener(e, load, { once: true, passive: true }));
})();
