# Pendiente de aprobación del cliente — Clean Solutions

Todo lo que la web afirma sale de la web actual (cleansolutionsva.com). Aun así, hay que confirmarlo antes de publicar. Lo que no está confirmado **no aparece** en la web.

## Pedidos del cliente (equipo Helice)
- [ ] **Imágenes nuevas:** el cliente las está enviando. Ahora se usan **las mismas fotos y el mismo video de la web actual** (repo + `/uploads/cms/`). Para cambiarlas, reemplazar el archivo en `src/assets/img/` con el mismo nombre o cambiar `image` en `src/data/services.ts`.
- [x] **Encabezado "Get Your Quote":** está en el botón del header, el título del formulario y la barra móvil. Confirmar si el cliente quería otra cosa con "cambiar el encabezado".
- [x] **Check "no soy un robot":** Cloudflare Turnstile en todos los formularios, verificado en el servidor.

## Datos tomados de Notion y de la web actual (verificar)
- [ ] **Dirección del Google Business Profile:** 4535 Bainbridge Blvd, Chesapeake, VA 23320. Ahora aparece en el footer, en contacto y en el schema, y debe coincidir exactamente con GBP.
- [ ] **Horario** (footer actual): lunes a viernes 8:00–17:00, sábado 8:00–15:00, domingo cerrado. Está en el schema `openingHoursSpecification`.
- [ ] "Licensed, insured & bonded", que la web actual dice en dos sitios. Pedir el número de licencia o la aseguradora.
- [ ] Testimonio de "Evangeline Lee": lo pidió el cliente en sus correcciones. Se muestra **una sola vez** y como texto. Reemplazarlo por reseñas reales de Google.
- [ ] "100% Satisfaction Guaranteed": sale de la web actual y se apoya en la política de 24 h del FAQ.
- [ ] **Correos que no llegan** (pendiente del equipo): la función usa las mismas variables que ya están en Cloudflare (`RESEND_API_KEY`, `CONTACT_FROM`, `CONTACT_TO`). Si no llegan, revisar que `CONTACT_FROM` sea un remitente verificado en Resend (GET /api/contact-message muestra qué falta). Probar el envío real en el preview de Cloudflare.
- [ ] **GA4 `G-39NGNSXF8M`** tiene 0 datos (diagnóstico de Notion). Poner `PUBLIC_GA4_ID=G-39NGNSXF8M` en producción y verificar los eventos.
- [ ] Redes sociales: en la web actual apuntan a facebook.com, tiktok.com e instagram.com genéricos. Pedir las URLs reales para el footer y para `sameAs`.

## Datos a confirmar (aparecen en la web)
- [ ] 5 años de experiencia (`yearsInBusiness`).
- [ ] Nombres de los dueños: **Marcial y Dolores**, tal como aparecen en la web actual. Confirmar quién es quién y si se pueden publicar.
- [ ] Ciudades atendidas: Chesapeake, Virginia Beach, Norfolk, Portsmouth y Suffolk, más los barrios listados en `src/data/areas.ts`.
- [ ] Checklists de cada servicio (`src/data/services.ts → includes`). Son el alcance estándar del sector y hay que validarlos uno por uno.
- [ ] Airbnb: si gestionan ropa de cama, reposición de insumos y aviso de daños.
- [ ] Post-construction: método de 3 fases (está en la web actual).
- [ ] Oficinas: si limpian fuera del horario de oficina.
- [ ] Garantía: "avisar en 24 h y lo arreglamos" (está en el FAQ actual). Ahora se presenta como **The Make-It-Right Promise**.
- [ ] Productos eco-friendly y personal capacitado (están en el FAQ actual).
- [ ] Mensaje de texto (SMS) al mismo número: si lo aceptan, se añade "Text" a la barra móvil.
- [ ] Ajustes de copy comercial pendientes de aprobación: "bi-weekly cuesta menos por visita", "Real people prepare your quote".

## No publicado hasta tener datos reales
- Reseñas de Google: hay que exportar el texto real con nombre. Mostrarlas como texto con atribución, nunca como `AggregateRating` propio.
- Perfiles para `sameAs`: Google Business (CID), Facebook, Instagram, Yelp, BBB.
- Equipo: los 8 nombres de la web actual ("Richard Powel", "Vini mior"…) son de la plantilla. **No se migran.**
- Fotos de limpiadores con uniforme y el logo de otra marca (`1d8e…png`, `Gemini_…png`): **no se usan.**

## Propuestas de oferta (para subir la conversión, requieren el OK del cliente)
- Oferta de primera visita, por ejemplo "$X off your first deep cleaning" o "first recurring clean at deep-clean quality".
- Tiempo de respuesta concreto ("We reply within 1 business hour"): solo si lo pueden cumplir.
- Garantía con nombre propio ampliada ("We come back and re-clean for free").

## Integraciones
- [ ] Turnstile: crear el widget en Cloudflare para `cleansolutionsva.com` y poner `PUBLIC_TURNSTILE_SITE_KEY` y `TURNSTILE_SECRET_KEY`.
- [ ] Resend: `RESEND_API_KEY`, `CONTACT_FROM` (remitente verificado) y `CONTACT_TO`.
- [ ] `PUBLIC_FORM_MODE=live` en producción.
- [ ] GA4 (`PUBLIC_GA4_ID`) con los eventos `generate_lead`, `call_click` y `email_click`.

- [x] **Panel /admin del desarrollador anterior** (confirmado 2026-11-11: el cliente NO lo usa; /admin redirige 301 a la home): la web vieja tenía un panel (/admin, Firebase + función `api/github/commit`) para editar servicios, equipo y testimonios. La web nueva no lo usa (el contenido está en el código). No se migra.
