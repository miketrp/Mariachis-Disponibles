# GitHub Configuration - Mariachis Bogotá Élite

## 📁 Estructura de GitHub

### Workflows
- `.github/workflows/deploy.yml` - Workflow de GitHub Actions para despliegue automático en Vercel

### Configuración de Secrets Necesarios
Para el despliegue automático, configura los siguientes secrets en GitHub:

- `VERCEL_TOKEN` - Token de autenticación de Vercel
- `ORG_ID` - ID de la organización en Vercel
- `PROJECT_ID` - ID del proyecto en Vercel

## 🔄 Actualizaciones Recientes

### Cambios en Componentes (Marzo 2026)

#### 1. Gallery Component (`components/Gallery.tsx`)
- ✅ **Actualizado**: Foto de bodas reemplazada de `/images/image_25bf8868.png` a `/images/Mariachi.jpg`
- **Motivo**: Mejor calidad de imagen para la sección de bodas

#### 2. WhatsAppFloat Component (`components/WhatsAppFloat.tsx`)
- ✅ **Actualizado**: Imagen del botón de WhatsApp cambiada de `/images/—Pngtree—whatsapp icon logo whatsapp logo_3560533.png` a `/images/icons8-whatsapp-200.apng.png`
- **Motivo**: Icono de WhatsApp más profesional y moderno

#### 3. Analytics Component (`components/Analytics.tsx`)
- ✅ **Solucionado**: Problema de hidratación corregido
- ✅ **Cambiado**: Uso de `useEffect` en lugar de renderizado directo de scripts
- **Motivo**: Prevenir errores de hidratación entre servidor y cliente

#### 4. Layout Component (`app/layout.tsx`)
- ✅ **Reubicado**: Componente `Analytics` movido de `<head>` a `<body>`
- **Motivo**: Mejor compatibilidad con renderizado del lado del cliente

## 🚀 Características de Despliegue

### GitHub Actions
- **Trigger**: Push y Pull Request a ramas `main` o `master`
- **Proceso**: 
  1. Checkout del código
  2. Setup de Node.js 18
  3. Instalación de dependencias
  4. Ejecución de linter
  5. Build del proyecto
  6. Despliegue en Vercel

### Optimizaciones
- ✅ Cache de dependencias npm
- ✅ Ejecución de linter para calidad de código
- ✅ Build previo al despliegue
- ✅ Despliegue automático en producción

## 📊 Monitoreo

### Vercel Analytics
- Integrado en componente `Analytics`
- Google Analytics configurado
- Facebook Pixel incluido
- Schema.org LocalBusiness para SEO

### Vercel Speed Insights
- Monitoreo de rendimiento en tiempo real
- Web Vitals tracking
- Análisis de velocidad de carga

## 🔧 Configuración Técnica

### Framework
- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones

### Optimizaciones SEO
- Meta tags dinámicos
- Sitemap XML automático
- Robots.txt configurado
- Schema.org implementado
- Imágenes optimizadas con Next.js Image

### Seguridad
- Headers de seguridad configurados
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- X-XSS-Protection: 1; mode=block

## 📝 Notas de Mantenimiento

### Próximas Mejoras Sugeridas
1. Implementar tests unitarios con Jest
2. Agregar integración con Google Search Console
3. Configurar PWA (Progressive Web App)
4. Implementar lazy loading avanzado
5. Agregar más idiomas (inglés)

### Archivos Clave Actualizados
- `components/Gallery.tsx` - Galería con nueva imagen de bodas
- `components/WhatsAppFloat.tsx` - Botón de WhatsApp con nuevo icono
- `components/Analytics.tsx` - Solución de hidratación
- `app/layout.tsx` - Reubicación de componentes
- `.github/workflows/deploy.yml` - Pipeline de despliegue
- `DEPLOY_VERCEL.md` - Documentación actualizada

## 🆘 Soporte

Para problemas con el despliegue:
1. Verificar secrets configurados en GitHub
2. Revisar logs de GitHub Actions
3. Verificar configuración en Vercel Dashboard
4. Consultar `DEPLOY_VERCEL.md` para troubleshooting