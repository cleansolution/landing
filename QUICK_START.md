# 🎯 Guía Rápida - Admin Dashboard

## ✅ Pasos para Comenzar

### 1️⃣ Configurar Firebase (SOLO UNA VEZ)
```
1. Ir a: https://console.firebase.google.com
2. Seleccionar proyecto: cleansolution-d9c89
3. Authentication → Users → Add User
4. Email: admin@cleansolutions.com
5. Password: (tu contraseña segura)
6. Sign-in method → Email/Password → Habilitar
```

### 2️⃣ Iniciar Servidores (CADA VEZ QUE EDITES)

**Terminal 1 - API Server:**
```bash
cd server
npm start
```
✅ Debe mostrar: "Admin API Server running on http://localhost:5000"

**Terminal 2 - React App:**
```bash
npm start
```
✅ Debe abrir: http://localhost:3000

### 3️⃣ Iniciar Sesión
```
URL: http://localhost:3000/admin/login
Email: admin@cleansolutions.com
Password: (tu contraseña)
```

## 🎨 Editar Contenido

### 🏠 Dashboard (`/admin`)
- Vista general con estadísticas
- Accesos rápidos a todas las secciones

### 📦 Services (`/admin/services`)
**¿Qué puedo hacer?**
- ➕ Agregar nuevo servicio → Botón "Add New Service"
- ✏️ Editar servicio → Botón "Edit" en cada tarjeta
- 🗑️ Eliminar servicio → Botón "Delete"
- 📷 Cambiar imagen → Click en imagen o "Click to upload"

**Campos:**
- Título del servicio
- Descripción
- Enlace a página (opcional)
- Imagen

### 👥 Team (`/admin/team`)
**¿Qué puedo hacer?**
- ➕ Agregar miembro → Botón "Add Team Member"
- ✏️ Editar miembro → Botón "Edit"
- 🗑️ Eliminar miembro → Botón "Delete"
- 📷 Subir foto → Click en círculo de foto

**Campos:**
- Nombre completo
- Cargo/Posición
- Foto de perfil
- Instagram, Facebook, WhatsApp, Twitter

### 💬 Testimonials (`/admin/testimonials`)
**¿Qué puedo hacer?**
- ➕ Agregar testimonio → Botón "Add Testimonial"
- ✏️ Editar testimonio → Botón "Edit"
- 🗑️ Eliminar testimonio → Botón "Delete"
- 📷 Foto del cliente → Click en círculo

**Campos:**
- Nombre del cliente
- Empresa/Título
- Texto del testimonio
- Foto del cliente

### ✨ Features (`/admin/features`)
**¿Qué puedo hacer?**
- ➕ Agregar característica → Botón "Add Feature"
- ✏️ Editar característica → Botón "Edit"
- 🗑️ Eliminar característica → Botón "Delete"

**Campos:**
- Título de la característica
- Descripción

### 📖 About (`/admin/about`)
**¿Qué puedo hacer?**
- ✏️ Editar información general
- 📷 Cambiar imagen principal
- ➕ Agregar estadísticas → Botón "Add Stat"
- ✏️ Editar estadísticas existentes
- 🗑️ Eliminar estadísticas → Botón "✕"

**Campos:**
- Título de la sección
- Encabezado principal
- Descripción
- Imagen
- Estadísticas (valor + etiqueta)

## 💾 ¿Cómo Guardar?

1. **Hacer cambios** en el formulario
2. **Click en botón azul** ("Add..." o "Update...")
3. **Esperar confirmación** ✅ "saved successfully"
4. **Listo!** Los cambios están guardados

## 📸 Subir Imágenes

### Formatos Permitidos:
- ✅ PNG
- ✅ JPG
- ✅ JPEG

### Tamaño Máximo:
- 📏 5MB por imagen

### Cómo Subir:
1. Click en área de imagen (📷)
2. Seleccionar archivo
3. Ver vista previa
4. Guardar formulario

## 🚪 Cerrar Sesión

1. Scroll al final del sidebar izquierdo
2. Click en tu email
3. Click "Sign Out"

## ⚠️ Problemas Comunes

### "Cannot fetch data"
❌ **Problema:** API no está corriendo  
✅ **Solución:** Iniciar servidor API (`cd server && npm start`)

### "Authentication required"
❌ **Problema:** No has iniciado sesión  
✅ **Solución:** Ir a `/admin/login` e iniciar sesión

### "Failed to save"
❌ **Problema:** API no responde  
✅ **Solución:** Verificar que ambos servidores estén corriendo

### No veo cambios en el sitio
❌ **Problema:** Caché del navegador  
✅ **Solución:** Refrescar con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)

## 📱 Atajos de Teclado

- `Esc` → Cerrar formulario modal
- `Ctrl + S` → Guardar (cuando está en formulario)
- `Ctrl + Z` → Deshacer en campos de texto

## 🎯 Tips Útiles

1. **Guarda frecuentemente** → No esperes a terminar todo
2. **Usa imágenes optimizadas** → Más rápido el sitio
3. **Nombres descriptivos** → Facilita encontrar contenido
4. **Revisa vista previa** → Antes de publicar

## 📞 ¿Necesitas Ayuda?

Si algo no funciona:
1. ✅ Verifica que ambos servidores estén corriendo
2. ✅ Abre la consola del navegador (F12)
3. ✅ Revisa si hay errores en rojo
4. ✅ Contacta al desarrollador

---

**¡Listo para comenzar! 🚀**

URL Admin: http://localhost:3000/admin/login
