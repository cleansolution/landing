# Auditoría SEO + GEO: cleansolutionsva.com (11-nov-2026)

Revisión del código del repo y de la web publicada (con curl). **Todavía no se ha medido Lighthouse.**

## Stack
- React (Create React App) es una SPA: el HTML llega vacío (`<div id="root">`) y todo el texto se pinta con JavaScript.
- Está en Cloudflare Pages, con una función `functions/api/contact-message.js` que envía el correo con Resend.
- Hay una sola página pública (`/`). Los servicios se abren en un modal y no tienen URL propia. Las rutas `/home-1` y `/home-2` son prototipos que siguen públicos.

## A. Rastreo e indexación
| | Estado | Evidencia |
|---|---|---|
| robots.txt | ⚠️ | Permite todo, pero no declara el sitemap. |
| sitemap.xml | ❌ | `/sitemap.xml` devuelve la home en HTML (fallback de la SPA), no un XML. |
| llms.txt | ❌ | Devuelve la home en HTML. |
| 404 real | ❌ | Cualquier URL da 200 (soft 404). |
| www / no-www | ❌ | `www.cleansolutionsva.com` da 200 en vez de 301: contenido duplicado. |
| http → https | ✅ | 301. |
| Canonical | ❌ | No hay. |
| Contenido sin JS | ❌ | Es una SPA, así que Google tiene que renderizar y las IAs (GPTBot, ClaudeBot, Perplexity) no ven nada de texto. |
| Prototipos | ❌ | `/home-1` y `/home-2` son indexables y duplican contenido. |
| Widget de Netlify Identity | ⚠️ | Se carga en todas las páginas y la web ya no está en Netlify: es JS bloqueante que sobra. |

## B. On-page
- **Title:** 74 caracteres y sin keyword de servicio al principio. ⚠️
- **Meta description:** 218 caracteres (se corta). ⚠️
- **H1:** hay **dos** (`We Don't Just Clean.` y `We Elevate Your Space.`), sin keyword ni ciudad. ❌
- **H2 de servicios:** "The Best Way to Find Specialist Services" es genérico, sin "house cleaning" ni ciudad. ⚠️
- **Texto de relleno de plantilla:** "control over products allows us to ensure…" en el formulario. ⚠️
- **Open Graph:** falta `og:image` absoluto de 1200×630, `og:site_name` y `og:locale`. ⚠️
- **Alts genéricos:** `cross-arrow`, `headphone-icon`, `quote` (deberían ser `alt=""`). ⚠️
- **Formularios sin `<label>`:** solo usan placeholder. ❌ (accesibilidad)
- **`seoData.json`:** tiene titles para about/services/contact, pero esas páginas no existen.

## C. Schema
No hay ningún JSON-LD: faltan LocalBusiness/HouseCleaningService, Service, FAQPage (el FAQ ya existe y es visible) y sameAs. ❌

## D. Rendimiento (estimación, falta medir)
- Videos en `src/assets`: 15 MB (`CleanSolutions.mp4`) y 12.9 MB (`video2.mp4`) en la home. El hero es un video. ❌
- Imágenes: 29 MB en total y 13 archivos de más de 300 KB. ❌
- Preloader de pantalla completa, más GSAP, ScrollMagic, Swiper, Firebase, TinaCMS y Sanity en las dependencias: el bundle es pesado. ⚠️
- Clases `fade_up`: hay que confirmar que no ocultan texto con opacity 0.

## F. Contenido y local
- El hero nombra 5 ciudades (Virginia Beach, Chesapeake, Norfolk, Portsmouth, Suffolk), pero no hay una página por ciudad ni por servicio. ❌
- No aparecen los sinónimos del rubro (house cleaning, maid service, house cleaners). ❌
- El NAP solo dice "Chesapeake", sin dirección. Hay que confirmar si es un service-area business.
- Hay llamada a la acción por teléfono y botón sticky. ✅ Falta SMS/texto si el cliente lo usa.
- "5 years of experience" está en el meta, pero hay que confirmarlo con el cliente.

## G. GEO
Sin llms.txt, sin schema, sin páginas por servicio o ciudad y sin texto en el HTML. Hoy las IAs prácticamente no pueden citar esta web. ❌

## H. Fuera de la web (pedir acceso)
Google Business Profile (¿tiene teléfono? ¿zonas = las 5 ciudades?), reseñas, Yelp/BBB/Angi, Search Console, Bing Webmaster y analítica. **Nada de esto se puede ver desde fuera.**

## Seguridad y spam del formulario
- No tiene ninguna protección anti-bots: ni captcha ni honeypot.
- El correo mete los datos del usuario en HTML sin escapar, así que se puede inyectar HTML o enlaces en el email que recibe el cliente.
- CORS está abierto con `*`, así que cualquier sitio puede usar el endpoint para mandar correos.

## Puntuación GET CHOSEN (0–5)
| Capa | Nota | Por qué |
|---|---|---|
| FOUND | 1 | Una sola URL, sin sitemap, soft 404 y www duplicado. |
| UNDERSTOOD | 1 | Sin schema, sin páginas por servicio o ciudad y H1 genérico. |
| TRUSTED | 1 | Testimonios en la web; GBP y licencia sin verificar. |
| CHOSEN | 1 | Copy genérico de plantilla. |
| ACTIONABLE | 3 | Teléfono visible, sticky call y formulario (sin protección). |

## Plan priorizado
**Fase 1: pedido del cliente + rápidos (1 día)**
1. Cambiar el encabezado (Get Your Quote) según lo que confirme el cliente.
2. Poner Cloudflare Turnstile + honeypot en los dos formularios, verificarlo en la función y escapar el HTML del correo.
3. Un solo H1 con keyword + zona, title y description con la longitud correcta, canonical y OG completo.
4. robots.txt con sitemap y bots de IA, `sitemap.xml` y `llms.txt` reales, redirección 301 de www y `noindex` o borrado de `/home-1` y `/home-2`.
5. JSON-LD de HouseCleaningService y FAQPage.
6. Quitar el widget de Netlify Identity.
7. Las imágenes nuevas se integran cuando el cliente las envíe (pendiente).

**Fase 2: estructura SEO (la de mayor impacto)**
8. Pasar a HTML pre-renderizado: o se migra a Astro como el resto de webs del plan, o se hace pre-render de React. Sin esto no hay GEO.
9. Páginas por servicio (residential/house cleaning, deep, move in/out, Airbnb, post-construction, commercial/office) y por ciudad real atendida.
10. Comprimir los videos (pasar de 15 MB a menos de 2 MB, con poster y carga diferida) y las imágenes a WebP/AVIF.

**Fase 3: fuera de la web**
11. GBP, citaciones, Search Console, Bing, GA4 con eventos y línea base de answer share.

## Pedir al cliente
- Texto exacto del nuevo encabezado.
- Imágenes nuevas.
- Ciudades que atiende de verdad.
- Dirección (o confirmar que solo atiende a domicilio).
- Años en el negocio.
- Licencia, seguro y bonding.
- Acceso a GBP y a Cloudflare/DNS.
- De dónde vienen sus leads y en qué idioma.
- Si sus clientes prefieren llamada, texto o formulario.

---

## Rediseño (rama `redesign/astro-seo`, carpeta `web/`), 11-nov-2026
Web nueva en Astro: 19 páginas (home, 6 servicios, 5 ciudades, hubs, about, contact, privacy, thank-you y 404). Todavía no está publicada.

| Página (móvil, build de producción) | Rend. | Acces. | Buenas pr. | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| Home | 96 | 100 | 100 | 100 | 1.8 s | 30 ms | 0 |
| /services/deep-cleaning/ | 97 | 100 | 100 | 100 | 1.6 s | 10 ms | 0 |

En escritorio: 99 / 100 / 100 en home, servicio y ciudad (el SEO local da 69 solo por el `noindex` intencionado). La auditoría estática (`npm test`) no da errores. La función del formulario pasa 8 pruebas: envío válido, HTML escapado, honeypot, sin token, Turnstile fallido, origen ajeno y teléfono inválido.

Otros hallazgos de la web vieja:
- El `apple-touch-icon` y `logo192/512` son el logo de React por defecto.
- Los testimonios y el equipo son de plantilla.
- Las fotos de limpiadores llevan el logo de otra marca.
