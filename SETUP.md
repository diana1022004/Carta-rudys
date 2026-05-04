# Rudy's Bar - Guía de Configuración

## 📋 Requisitos

- Cuenta en [Vercel](https://vercel.com)
- Git instalado
- Editor de código (VS Code recomendado)

## 🎵 Paso 1: Agregar Música de Fondo

1. **Renombra tu archivo de audio** a `background.mp3`
2. **Copia el archivo** a la carpeta: `assets/audio/`
3. La estructura debe verse así:
   ```
   assets/
   └── audio/
       └── background.mp3
   ```

## 🖼️ Paso 2: Agregar Logo

El logo ya está referenciado en el código. Necesitas:

1. **Obtener el logo de Rudys** en formato PNG o SVG
2. **Copiar a la carpeta**: `assets/img/`
3. **Renombrarlo como**: `logo.png`
4. **Crear también**: `logo-large.png` (versión más grande para hero)

Estructura esperada:
```
assets/
└── img/
    ├── logo.png          (50x50 para navbar)
    ├── logo-large.png    (180x180 para hero)
    └── favicon.png       (16x16 opcional)
```

## 🚀 Paso 3: Desplegar en Vercel

### Opción A: Desde GitHub (Recomendado)

1. **Sube el proyecto a GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit - Rudy's Bar"
   git push origin main
   ```

2. **Ve a [Vercel.com](https://vercel.com)**
3. **Conecta tu cuenta de GitHub**
4. **Haz click en "Import Project"**
5. **Selecciona tu repositorio**
6. **Haz click en "Deploy"**

### Opción B: Drag & Drop (Más Fácil)

1. **Ve a [Vercel.com](https://vercel.com)**
2. **Arrastra la carpeta del proyecto** al área de drop
3. **Espera a que se suba**
4. ¡Listo! Tu web está en vivo

## 📁 Estructura Final del Proyecto

```
Carta Rudys/
├── index.html
├── README.md
├── vercel.json
├── .gitignore
├── SETUP.md
├── assets/
│   ├── audio/
│   │   └── background.mp3
│   └── img/
│       ├── logo.png
│       ├── logo-large.png
│       └── favicon.png
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── data.js
    └── music.js
```

## 🎨 Personalización

### Cambiar Colores

Abre `css/styles.css` y modifica estas variables al inicio:

```css
:root {
  --primary-dark: #0d1f2d;      /* Azul oscuro */
  --accent-gold: #d4af37;       /* Oro */
  --text-light: #f5f5f5;        /* Texto claro */
}
```

### Agregar Más Productos

Edita `js/data.js` siguiendo el formato existente:

```javascript
{
  id: 'id-unico',
  category: 'clasicos|autor|sinlicor|bebidas|comidas',
  name: 'Nombre del Producto',
  price: 25000,
  description: 'Descripción corta',
  ingredients: 'Lista de ingredientes',
  image: '🍹', // Emoji o URL de imagen
  emoji: true // true si usas emoji, false si usas imagen
}
```

## 📱 Características

✅ **Responsive Design** - Funciona en móvil, tablet y desktop
✅ **Música de Fondo** - Con controles de play/pausa/volumen
✅ **Modal Interactivo** - Detalles de cada producto
✅ **Sistema de Reservas** - Formulario de reserva
✅ **Animaciones** - Entrada elegante y efectos hover
✅ **Tema Discoteca** - Colores azul oscuro + oro
✅ **Menú de Categorías** - Filtrado dinámico

## 🔗 URLs Útiles

- **Tu web en Vercel**: `https://tu-nombre.vercel.app`
- **Repositorio GitHub**: `https://github.com/tu-usuario/carta-rudys`
- **Editar en Vercel**: Dashboard > Project > Settings

## ⚙️ Mantenimiento

- **Actualizar precios**: Edita `js/data.js`
- **Cambiar horario**: Edita `index.html` sección "contacto"
- **Agregar fotos reales**: Reemplaza emojis por rutas de imagen en `data.js`

## 🎸 Rock On!

¡Tu web de Rudys Bar está lista! 🎵

Para más ayuda o cambios, contáctame. 🤘

