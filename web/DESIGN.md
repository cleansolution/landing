# DESIGN.md — Clean Solutions CO. LLC

Ficha según el **Prompt Maestro — Web Premium, Interactiva y Única** (Notion). Es un rediseño de cleansolutionsva.com que **conserva las fotos, el video y los textos actuales del cliente**; cuando lleguen las fotos nuevas se cambian sin tocar el diseño.

## Ficha (A–F)
| Categoría | Elección | Razón |
|---|---|---|
| **A. Arquetipo** | **4 · Documental** con escenas cinematográficas puntuales | El material del cliente es real: su video de Virginia Beach, los dueños y fotos de trabajos. Se presenta a sangre y con profundidad, en vez del editorial serif de Roamza. |
| **B. Hero** | **Video a sangre con texto superpuesto + cotizador integrado** (formulario "Get Your Quote" a la derecha, estilo vidrio) | Es lo que el cliente pidió en sus correcciones (Notion, feb 2026) y lo que ya convertía. Mantiene su frase "We Don't Just Clean. We Elevate Your Space." y añade un H1 SEO. |
| **C. Header** | Barra blanca con teléfono y CTA persistente que se compacta al bajar. En móvil, barra inferior **Call · Get Your Quote**, y una barra de progreso de página en todas | Negocio local que se usa sobre todo desde el móvil. |
| **D. Patrones (7)** | 1) Tipografía gigante que se desliza con el scroll (ticker de servicios) · 2) Pestañas Residential/Commercial con tarjetas-foto con inclinación y luz (como su web, más premium) · 3) Frase que se ilumina palabra a palabra con el scroll · 4) Proceso de 3 pasos con línea de progreso · 5) **Scroll horizontal fijado** con sus proyectos reales · 6) Tabla comparativa de frecuencias · 7) FAQ en acordeón. Cierre con spotlight y cifras animadas (solo datos reales) | Cada patrón explica algo: qué hacemos, cómo, prueba, cada cuánto y cómo reservar. |
| **E. Movimiento** | **Nivel 2 · Medio** (lo que el prompt indica para negocios de servicios) | Parallax suave, títulos que entran, una sección fijada, efectos de cursor solo en escritorio. Todo en JS propio (~4 KB), cargado al primer gesto del usuario. Sin Lenis (el scroll lo controla el usuario). |
| **F. Firma** | **La pasada de la escobilla:** el subrayado cian que "barre" palabras clave ("Elevate", "space", ciudades), los arcos en las fotos de los dueños y el diamante del logo | Sale del logo (diamante con trazo) y del oficio. Nada de chispas ✦ ni iconografía de IA. |

## Paleta
| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--brand` | `#184A8C` | Azul del logo: CTA principal (texto blanco) | ≈ 8.6:1 ✔ |
| `--brand-ink` | `#0F2F5C` | Títulos y escenas oscuras | ≈ 13:1 ✔ |
| `--sky` | `#00ADEF` | Cian del logo: luz, firma, CTA sobre oscuro (texto ink) | ink/sky ≈ 7:1 ✔ |
| `--sky-600` | `#0074A6` | Acentos pequeños sobre blanco | ≈ 5:1 ✔ |
| Ticker | contorno `#6B88AD` | Texto grande decorativo | ≥ 3:1 ✔ |
| Frase sin iluminar | `#71859E` | Texto grande | ≥ 3:1 ✔ |

## Tipografía
**Plus Jakarta Sans Variable** (200–800), autoalojada y precargada. No repite ninguna fuente de otras webs Helice: Fraunces + Instrument Sans (Roamza), Archivo (Quality Plus, Xmoox), Bricolage + Figtree (Pro Help) y Manrope.

## Recursos del cliente usados
- **Video:** `CleanSolutions.mp4`, que pesaba 15 MB. Ahora son `hero.mp4` (0,8 MB) + `hero.webm` (0,5 MB) a 720p, sin audio. La imagen de portada es el LCP. En móvil el video arranca al primer gesto y se puede pausar.
- **Fotos:**
  - Las de servicios del panel (`/uploads/cms/`) y del repo.
  - Las de proyectos 1–6.
  - Dolores (fundadora), Marcial en el escritorio, los dueños juntos y "person taking care".
- **Textos:** los de la web actual (hero, about, why us, proceso, FAQ, proyectos y testimonio).

## Fila para el Registro de webs
| Cliente | Arquetipo | Hero | Header | Patrones | Nivel | Firma | Tipografía | Stack |
|---|---|---|---|---|---|---|---|---|
| Clean Solutions (Chesapeake, VA) | 4 Documental | Video a sangre + cotizador | Barra con CTA y teléfono, barra móvil inferior | Ticker con scroll, pestañas con tarjetas-foto, frase iluminada, proceso con línea, scroll horizontal fijado, tabla de frecuencias, FAQ | 2 | Pasada de escobilla (subrayado cian) | Plus Jakarta Sans | Astro 7, CSS propio, Cloudflare Pages + Function (Turnstile + Resend) |
