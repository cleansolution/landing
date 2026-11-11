# Clean Solutions CO. LLC — website (Astro)

Nueva web de **Clean Solutions CO. LLC** (limpieza residencial y comercial · Chesapeake, VA). Es un sitio estático con Astro, pensado primero para SEO local, GEO y conversión. Reemplaza la SPA de React que está en la raíz del repo.

**Todavía no hay nada publicado.** Ver [`PENDING_CLIENT_APPROVAL.md`](PENDING_CLIENT_APPROVAL.md) y la ficha de diseño en [`DESIGN.md`](DESIGN.md).

## Comandos (desde `web/`)

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```
Por defecto genera el modo local: todas las páginas llevan `noindex` y robots.txt bloquea el rastreo.

```bash
npm run preview
```

```bash
npm test
```
Hace el build y la auditoría SEO (titles, descriptions, H1, canonicals, JSON-LD, alt, enlaces y sitemap).

```bash
npm run test:production
```
Hace el build con la indexación activada y lo audita.

```bash
node scripts/make-icons.mjs
```
Regenera los favicons, `logo-512.png` y `og-default.jpg`.

## Estructura
- `src/data/services.ts`: 7 servicios, cada uno con su página en `/services/<slug>/`.
- `src/data/areas.ts`: 5 ciudades con contenido propio, en `/service-areas/<slug>/`.
- `src/config/site.ts`: NAP, flags y menú.
- `src/config/indexing.mjs`: URLs pendientes (llevan noindex y quedan fuera del sitemap).
- `src/lib/schema.ts`: JSON-LD (`HomeAndConstructionBusiness`, `Service`, `FAQPage`, `BreadcrumbList`).
- `src/pages/llms.txt.ts` y `robots.txt.ts`: se generan desde los datos.
- `functions/api/contact-message.js`: Cloudflare Pages Function. **Mismo contrato que la del desarrollador anterior** (mismas variables `RESEND_API_KEY`/`RESEND_API_kEY`, `CONTACT_TO`, `CONTACT_FROM`; mismo cuerpo JSON; mismo asunto "New Quote Request - nombre (servicio)"; mismo GET de diagnóstico; CORS `*`). Añade honeypot, escape de HTML y **Turnstile**, que solo se exige si existe `TURNSTILE_SECRET_KEY` (sin esa variable funciona igual que antes). `contact.php.js` se mantiene como alias.
- El formulario es igual al de la web actual (campos, textos, opciones de servicio y botón "Submit Request").
- `public/video/`: video del hero comprimido (mp4 + webm). Para regenerarlo desde el original:
  `ffmpeg -i CleanSolutions.mp4 -an -vf scale=1280:-2,fps=24 -c:v libx264 -crf 30 -movflags +faststart hero.mp4`
- `public/_redirects`: 301 de las URLs viejas de React. `public/_headers`: seguridad, caché y noindex en `*.pages.dev`.

## Despliegue en Netlify (actual)
- Proyecto Netlify `clean-solutions-va`, conectado a `github.com/cleansolution/landing`, rama `main` (auto publish).
- `netlify.toml` en la raíz: base `web`, `npm run build`, publica `dist`, funciones en `web/netlify/functions`, Node 22, `PUBLIC_FORM_MODE=live`.
- Formulario: **FormSubmit** (igual que Castellanos y MadeIn). `action="https://formsubmit.co/info@cleansolutionsva.com"`, con `_subject`, `_template=table`, `_captcha=true` (pantalla "I'm not a robot" de FormSubmit), `_honey` (trampa) y `_next` → `/thank-you/` del mismo dominio.
- **Activación:** el primer envío hace que FormSubmit mande un correo a info@cleansolutionsva.com con el botón "Activate Form". Hasta que se pulse, no llegan solicitudes. Tras activar, cada solicitud llega al correo con reply-to al cliente.
- `web/netlify/functions/contact-message.mjs` (Resend) queda como alternativa; el formulario ya no la usa.
- Variables en Netlify: `PUBLIC_GA4_ID=G-39NGNSXF8M`; `PUBLIC_ALLOW_INDEXING=true` al pasar el dominio.
- `PUBLIC_ALLOW_INDEXING=true` solo cuando el dominio apunte a Netlify (hoy el DNS de Namecheap apunta a 162.213.255.45, el hosting viejo).

## (Alternativa) Despliegue en Cloudflare Pages
1. Proyecto de Pages → *Settings → Build*:
   - Root directory: `web`
   - Build command: `npm run build`
   - Output: `dist`
   - Node 22
2. Variables solo de **Production**:
   - `PUBLIC_ALLOW_INDEXING=true`
   - `PUBLIC_FORM_MODE=live`
   - `PUBLIC_TURNSTILE_SITE_KEY`
   - `PUBLIC_GA4_ID=G-39NGNSXF8M`
3. Secrets:
   - `TURNSTILE_SECRET_KEY` (opcional: al ponerla se activa la verificación en el servidor)
   - `RESEND_API_KEY`
   - `CONTACT_FROM`
   - `CONTACT_TO`
4. Preview: usar la *test secret key* de Turnstile (`1x0000000000000000000000000000000AA`) y dejar `PUBLIC_ALLOW_INDEXING` sin poner.
5. Regla de redirección de Cloudflare: `www.cleansolutionsva.com/*` → `https://cleansolutionsva.com/$1` (301).
6. El mismo día del cambio:
   - Comprobar con curl que `/GetQuote`, `/Services`, `/home-1` y `/home-2` responden 301.
   - Comprobar que robots.txt, `sitemap-index.xml` y `llms.txt` responden 200.
   - Comprobar que una URL inventada da 404.
   - Enviar el sitemap en Search Console y en Bing Webmaster.
