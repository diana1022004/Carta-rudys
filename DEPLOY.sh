#!/bin/bash

# DEPLOY A VERCEL - Script automático

echo "🚀 Preparando Rudy's Bar para Vercel..."
echo ""

# Paso 1: Verificar si Git está inicializado
if [ ! -d ".git" ]; then
    echo "📦 Inicializando Git..."
    git init
    git add .
    git commit -m "🎸 Rudy's Bar - Sitio web inicial"
else
    echo "✅ Git ya está inicializado"
fi

echo ""
echo "📋 Archivos a desplegar:"
ls -la *.html *.json *.md css/ js/ assets/ 2>/dev/null || echo "Verifica que tengas logo.mp3 en assets/"

echo ""
echo "🌐 Opciones de despliegue:"
echo ""
echo "1️⃣  OPCIÓN A - GitHub (Recomendado)"
echo "   git remote add origin https://github.com/TU_USUARIO/carta-rudys.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo "   Luego: Ve a https://vercel.com/new y conecta tu repo"
echo ""
echo "2️⃣  OPCIÓN B - Vercel CLI"
echo "   npm install -g vercel"
echo "   vercel"
echo ""
echo "3️⃣  OPCIÓN C - Drag & Drop"
echo "   Ve a https://vercel.com/new"
echo "   Arrastra esta carpeta"
echo ""

# Paso 2: Crear archivo con instrucciones
cat > DEPLOY_NOTES.txt << 'EOF'
RUDY'S BAR - NOTAS DE DESPLIEGUE
================================

ANTES DE DESPLEGAR:
✅ Coloca background.mp3 en assets/audio/
✅ Coloca logo.png en assets/img/
✅ Verifica que index.html se abre sin errores localmente

DESPLIEGUE EN VERCEL (Más fácil):
1. Ve a https://vercel.com
2. Click en "Add New..." > "Project"
3. Importa desde GitHub o arrastra la carpeta
4. Click "Deploy"
5. ¡Listo! Tu web estará en vivo en ~30 segundos

URL FINAL: https://tu-nombre.vercel.app

DESPUÉS DEL DESPLIEGUE:
- Verifica que todo funcione
- Abre Inspector (F12) y checa Console
- Prueba en móvil (Responsive Design Mode)
- Comparte link en Instagram/WhatsApp

PERSONALIZACIONES POST-DESPLIEGUE:
- Cambiar precios: Edita js/data.js
- Cambiar colores: Edita css/styles.css (variables :root)
- Agregar productos: Agregar items en js/data.js
- Cambiar horario: Edita index.html sección footer

PROBLEMAS COMUNES:
❌ La música no suena: Verifica que background.mp3 exista
❌ Logo no aparece: Verifica que logo.png esté en assets/img/
❌ Estilos raros: Limpia caché (Ctrl+Shift+Del)
❌ Modal no cierra: Abre console y revisa errores

CONTACTO PARA AYUDA:
Si algo no funciona, revisa:
1. SETUP.md - Pasos de configuración
2. README.md - Características y uso
3. INTEGRACIONES.md - Conexión de formularios

¡Rock on! 🎸🎵
EOF

echo ""
echo "✅ Archivo DEPLOY_NOTES.txt creado"
echo ""
echo "🎸 ¡Listo para desplegar!"
echo ""
