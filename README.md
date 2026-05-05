# 🎸 RUDY'S BAR - YORK PUB

**Sitio Web Interactivo para Bar de Música Rock y Alternativa**

Diseñado con estilo discoteca, animaciones elegantes y experiencia mobile-first.

---

## ✨ Características

- 🎵 **Música de Fondo** - Controles de reproducción y volumen
- 🍹 **Galería Interactiva** - Clic en producto = detalles en modal
- 🎯 **Menú de Categorías** - Cocteles clásicos, de autor, sin licor, bebidas y comidas
- 📱 **Responsive** - Perfecto en móvil, tablet y desktop
- 🎬 **Animaciones** - Splash intro + efectos hover y transiciones
- 🔗 **Reservas Online** - Formulario integrado de reserva de mesa
- 🌐 **Listo para Vercel** - Despliegue en segundos

---

## 🎨 Diseño

- **Colores**: Azul oscuro (`#0d1f2d`) + Oro (`#d4af37`)
- **Estilo**: Premium, elegante, discoteca
- **Animaciones**: Fade-in, zoom, pulse, slide
- **Tipografía**: Segoe UI, fuente moderna y legible

---

## 📂 Estructura del Proyecto

```
├── index.html          # Página principal
├── vercel.json         # Configuración Vercel
├── SETUP.md            # Guía de configuración
├── README.md           # Este archivo
├── css/
│   └── styles.css      # Estilos completos (>900 líneas)
├── js/
│   ├── app.js          # Lógica principal
│   ├── data.js         # Base de datos de productos
│   └── music.js        # Control de música
└── assets/
    ├── audio/
    │   └── background.mp3
    └── img/
        ├── logo.png
        ├── logo-large.png
        └── favicon.png
```

---

## 🚀 Inicio Rápido

### 1. **Agregar Música y Logo**
   - Coloca `background.mp3` en `assets/audio/`
   - Coloca logo en `assets/img/` (ver SETUP.md)

### 2. **Probar Localmente**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # O con Node.js
   npx http-server
   ```
   Luego abre: `http://localhost:8000`

### 3. **Desplegar en Vercel**
   - **Opción A**: Sube a GitHub y conecta con Vercel
   - **Opción B**: Drag & drop en [Vercel.com](https://vercel.com)

---

## 📋 Contenido de la Carta

### Cocteles Clásicos (18 opciones)
- Smoked Mojito, Moscow Mule, Margarita, Martini, Negroni, y más...

### Cocteles de Autor (4 opciones)
- A Message to You Rudy, Black Leather Jacket, Pacific York, Midnight Groove

### Shots (3 opciones)
- Cocaína Rusa, York Knockout, Veneno del Rudy

### Sin Licor (4 opciones)
- Lulo Sour, Ginger Twist, Mora Tonic, Passion Smoke

### Bebidas (5 opciones)
- Cervezas nacionales e importadas

### Comidas (5 opciones)
- Hamburguesas, sándwiches, nachos y papas artesanales

---

## 🎮 Interactividad

| Elemento | Acción |
|----------|--------|
| **Logo/Navbar** | Fijo en top con controles de música |
| **Tarjetas de Producto** | Click abre modal con detalles completos |
| **Botones de Categoría** | Filtran dinámicamente la galería |
| **Botón Música** | Play/Pausa + Control de volumen flotante |
| **Botón Reserva** | Abre formulario modal |
| **ESC** | Cierra cualquier modal |

---

## 🎵 Música

- **Autoplay**: Intenta reproducir automáticamente
- **Controles**: Play/Pausa, volumen (0-100%)
- **Loop**: Se repite infinitamente
- **Ubicación**: Botón flotante en esquina inferior derecha

**Para agregar tu música:**
1. Convierte a MP3 (máx. 5MB recomendado)
2. Renombra como `background.mp3`
3. Copia a `assets/audio/`

---

## 🎨 Personalización

### Cambiar Colores (en `css/styles.css`)
```css
:root {
  --primary-dark: #0d1f2d;   /* Azul base */
  --accent-gold: #d4af37;    /* Acentos */
}
```

### Agregar Productos (en `js/data.js`)
```javascript
{
  id: 'nuevo-producto',
  category: 'clasicos',
  name: 'Nuevo Cóctel',
  price: 29000,
  description: 'Descripción',
  ingredients: 'Ron, limón, hierbabuena...',
  image: '🍹', // o URL de imagen
  emoji: true
}
```

### Modificar Contacto (en `index.html`)
- Cambia teléfono, Instagram, dirección en sección footer

---

## 📱 Responsive

- **Desktop**: Grid 4-5 columnas
- **Tablet**: Grid 3 columnas
- **Mobile**: Grid 2 columnas
- **Navbar** se adapta automáticamente
- **Menú hamburguesa** en mobile

---

## 🔐 Seguridad

- No requiere backend
- Formulario de reservas (puedes conectar a Formspree, Firebase, etc.)
- Sin dependencias externas
- CDN no requerido

---

## 🌐 Dominio Personalizado en Vercel

1. Ve a tu proyecto en Vercel
2. Settings > Domains
3. Agrega tu dominio personalizado
4. Sigue instrucciones de DNS

---

## 📞 Información de Contacto (Rudy's Bar)

- **Ubicación**: Calle 5 #26-68 B/San Fernando, Cali - Colombia
- **Instagram**: @RUDYSPUBCALI
- **Horario**: Jueves - Domingo 8PM - 4AM
- **Ambiente**: Rock, Alternativo, Música en Vivo

---

## 📄 Licencia

Personalizado para Rudy's Bar © 2026

---

## 🚀 Próximos Pasos

1. ✅ Agregar música y logo
2. ✅ Actualizar precios si cambian
3. ✅ Agregar fotos reales de bebidas/comidas
4. ✅ Conectar formulario de reservas a email
5. ✅ Agregar Google Analytics
6. ✅ Compartir link en Instagram

---

**¡Desplegado con ❤️ en Vercel!** 🎸🎵
