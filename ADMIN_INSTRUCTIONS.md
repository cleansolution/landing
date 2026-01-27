# Clean Solutions - Admin Dashboard

## 📋 Instrucciones para el Cliente

### 1. Configuración Inicial de Firebase

Para poder acceder al panel admin, primero debes crear tu cuenta de administrador:

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Inicia sesión con tu cuenta de Google
3. Selecciona el proyecto **"cleansolution-d9c89"**
4. En el menú lateral, haz clic en **"Authentication"**
5. Ve a la pestaña **"Users"**
6. Haz clic en **"Add User"**
7. Crea tu cuenta de administrador:
   - **Email:** admin@cleansolutions.com (o el que prefieras)
   - **Password:** Crea una contraseña segura
8. En la pestaña **"Sign-in method"**, asegúrate de que **"Email/Password"** esté **habilitado**

### 2. Iniciar el Sistema

Para usar el panel de administración necesitas ejecutar 2 servidores:

#### Servidor de API (Puerto 5000)
```bash
cd server
npm install
npm start
```

#### Aplicación React (Puerto 3000)
```bash
npm start
```

### 3. Acceder al Panel Admin

1. Abre tu navegador y ve a: `http://localhost:3000/admin/login`
2. Ingresa tu email y contraseña de Firebase
3. Serás redirigido al Dashboard

### 4. Gestionar Contenido

El panel admin te permite editar todo el contenido del sitio:

#### 📦 Services (Servicios)
- **Ubicación:** `/admin/services`
- **Funciones:**
  - ➕ Agregar nuevos servicios
  - ✏️ Editar servicios existentes
  - 🗑️ Eliminar servicios
  - 📷 Subir imágenes de servicios
  - 📝 Editar título, descripción y enlace

#### 👥 Team (Equipo)
- **Ubicación:** `/admin/team`
- **Funciones:**
  - ➕ Agregar miembros del equipo
  - ✏️ Editar información del equipo
  - 🗑️ Eliminar miembros
  - 📷 Subir fotos de perfil
  - 📱 Editar redes sociales (Instagram, Facebook, WhatsApp, Twitter)

#### 💬 Testimonials (Testimonios)
- **Ubicación:** `/admin/testimonials`
- **Funciones:**
  - ➕ Agregar testimonios de clientes
  - ✏️ Editar testimonios existentes
  - 🗑️ Eliminar testimonios
  - 📷 Subir fotos de clientes
  - 📝 Editar nombre, empresa y texto del testimonio

#### ✨ Features (Características)
- **Ubicación:** `/admin/features`
- **Funciones:**
  - ➕ Agregar características de la empresa
  - ✏️ Editar características
  - 🗑️ Eliminar características
  - 📝 Editar título y descripción

#### 📖 About (Acerca de)
- **Ubicación:** `/admin/about`
- **Funciones:**
  - ✏️ Editar información de la empresa
  - 📷 Cambiar imagen principal
  - 📊 Agregar/editar estadísticas de experiencia
  - 📝 Editar título, encabezado y descripción

### 5. Cómo Subir Imágenes

1. Haz clic en el área de carga de imagen (📷)
2. Selecciona la imagen desde tu computadora
3. Verás una vista previa inmediatamente
4. Las imágenes se guardan automáticamente al enviar el formulario

**Formatos aceptados:** PNG, JPG, JPEG  
**Tamaño máximo:** 5MB

### 6. Guardar Cambios

Todos los cambios se guardan automáticamente al hacer clic en:
- ✅ "Add Service" / "Update Service"
- ✅ "Add Member" / "Update Member"
- ✅ "Add Testimonial" / "Update Testimonial"
- ✅ "Add Feature" / "Update Feature"
- ✅ "Save About Section"

Verás una confirmación ✅ cuando se guarden correctamente.

### 7. Cerrar Sesión

- Haz clic en tu email en la parte inferior del sidebar
- Selecciona **"Sign Out"**

## 🚀 Despliegue a Producción (Netlify)

### Configuración del API

Para que el panel funcione en producción, necesitarás desplegar el servidor API:

**Opciones:**
1. **Heroku** (gratis): https://www.heroku.com
2. **Railway** (gratis): https://railway.app
3. **Render** (gratis): https://render.com

Una vez desplegado, actualiza la variable de entorno:

```env
REACT_APP_API_URL=https://tu-api-url.com/api
```

### Variables de Entorno en Netlify

Agrega estas variables en Netlify → Site Settings → Environment Variables:

```
REACT_APP_API_URL=https://tu-api-url.com/api
REACT_APP_FIREBASE_API_KEY=AIzaSyDuXfE6LPJqbF_bIwME_uAg0vr4qHWvB9U
REACT_APP_FIREBASE_AUTH_DOMAIN=cleansolution-d9c89.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=cleansolution-d9c89
REACT_APP_FIREBASE_STORAGE_BUCKET=cleansolution-d9c89.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=558330267906
REACT_APP_FIREBASE_APP_ID=1:558330267906:web:f5e7ab3d1cbdc4bf3cbe88
```

### Configurar Redirects en Netlify

Crea el archivo `public/_redirects`:

```
/api/* https://tu-api-url.com/api/:splat 200
/admin/* /index.html 200
/*  /index.html 200
```

## 🛠️ Soporte Técnico

Si tienes problemas:
1. Verifica que ambos servidores estén corriendo
2. Revisa la consola del navegador (F12) para errores
3. Asegúrate de estar autenticado en Firebase
4. Verifica que tu API esté accesible

## 📞 Contacto

Para asistencia técnica, contacta al desarrollador.

---

**Última actualización:** Enero 2026  
**Versión:** 1.0.0
