# Despliegue en Vercel - Mariachis Bogotá Élite

## 📋 Requisitos Previos

- Node.js 18+ 
- Cuenta en Vercel
- Proyecto configurado con Next.js 14

## 🚀 Instalación de Dependencias de Vercel

El proyecto ya tiene instalados los siguientes paquetes de Vercel:

```bash
# Analytics de Vercel (ya instalado)
npm install @vercel/analytics

# Speed Insights (ya instalado)
npm install @vercel/speed-insights
```

## 📊 Configuración de Analytics y Speed Insights

### Analytics
El componente `Analytics` en `components/Analytics.tsx` incluye:
- ✅ Vercel Analytics
- ✅ Google Analytics
- ✅ Facebook Pixel
- ✅ Schema.org LocalBusiness

**Nota:** El componente Analytics se ha actualizado para usar `useEffect` en lugar de renderizar scripts directamente, lo que soluciona problemas de hidratación.

### Speed Insights
El componente `SpeedInsights` en `components/SpeedInsights.tsx` proporciona:
- ✅ Métricas de rendimiento en tiempo real
- ✅ Monitoreo de Web Vitals
- ✅ Análisis de velocidad de carga

## 🔧 Configuración de GitHub Actions

### ⚠️ Problema de Variables de Entorno Resuelto

El workflow de GitHub Actions ahora maneja correctamente las variables de entorno no configuradas:

- ✅ **Detección automática** de variables faltantes
- ✅ **Mensajes informativos** cuando no están configuradas
- ✅ **Build y tests continúan** funcionando sin despliegue
- ✅ **Documentación clara** sobre cómo configurar

### Variables Necesarias para Despliegue Automático

Para habilitar el despliegue automático, configura estos secrets en GitHub:

1. `VERCEL_TOKEN`: Token de autenticación de Vercel
2. `ORG_ID`: ID de tu organización en Vercel  
3. `PROJECT_ID`: ID de tu proyecto en Vercel

**📖 Instrucciones detalladas en: `.github/README.md`**

## 📝 Pasos para Desplegar

### Opción 1: Despliegue Automático con GitHub Actions (Recomendado)
1. **Configurar secrets en GitHub** (ver `.github/README.md`)
2. **Conectar repositorio con Vercel**
3. **Push a main** → Despliegue automático

### Opción 2: Despliegue Manual con Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Desplegar a producción
vercel --prod

# O desplegar con preview
vercel
```

### Opción 3: Despliegue desde Dashboard de Vercel
1. Ir a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en "New Project"
3. Importar desde GitHub
4. Configurar y deployar

## 🎯 Características Implementadas

### ✅ Navegación Mejorada
- **Scroll suave** entre secciones
- **Enlaces funcionales** del menú a todas las secciones
- **Compensación de header fijo** para scroll perfecto

### ✅ SEO Optimizado
- **Script Schema.org LocalBusiness** implementado
- **Meta tags** completos para redes sociales
- **Sitemap y robots.txt** configurados
- **Analytics y Speed Insights** integrados

### ✅ Imágenes Actualizadas
- **Galería de bodas** actualizada con nueva imagen
- **Icono de WhatsApp** mejorado
- **Optimización de carga** de imágenes

### ✅ Configuración de Build
- **Sin errores de hidratación**
- **GitHub Actions** configurado
- **Variables de entorno** manejadas correctamente

## 📈 Monitoreo Post-Despliegue

### Analytics
- Visitar [Vercel Analytics Dashboard](https://vercel.com/dashboard/analytics)
- Ver métricas de usuarios, page views, y más

### Speed Insights
- Visitar [Vercel Speed Insights](https://vercel.com/dashboard/speed-insights)
- Monitorear Core Web Vitals
- Analizar métricas de rendimiento

## 🔍 Verificación Post-Despliegue

Después del despliegue, verificar:
1. ✅ La web carga correctamente en `https://[tu-dominio].vercel.app`
2. ✅ Todos los enlaces del menú funcionan (scroll suave)
3. ✅ Analytics está recopilando datos (24-48 horas)
4. ✅ Speed Insights muestra métricas
5. ✅ No hay errores en la consola del navegador
6. ✅ Las imágenes se cargan correctamente

## 🛠️ Solución de Problemas

### Si GitHub Actions falla:
- Verificar logs en GitHub Actions tab
- Asegurarse de que los secrets estén configurados
- Revisar que el build local funcione: `npm run build`

### Si Analytics no funciona:
- Verificar que el dominio esté correctamente configurado en Vercel
- Asegurarse de que el proyecto esté en producción (no preview)

### Si Speed Insights no muestra datos:
- Revisar que el componente esté renderizando correctamente
- Verificar la consola del navegador por errores
- Esperar 24-48 horas para datos iniciales

### Si la navegación no funciona:
- Verificar que JavaScript esté habilitado
- Limpiar caché del navegador
- Revisar que los IDs de secciones estén presentes

## 📋 Comandos Útiles

```bash
# Build local
npm run build

# Desarrollo
npm run dev

# Linting
npm run lint

# Despliegue manual
vercel --prod

# Logs de Vercel
vercel logs
```

## 📚 Recursos Adicionales

- [Vercel Analytics Docs](https://vercel.com/docs/analytics)
- [Vercel Speed Insights Docs](https://vercel.com/docs/speed-insights)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- **Configuración de GitHub Actions**: `.github/README.md`
- **Estado del proyecto**: `VERCEL_STATUS.md`

---
**🎯 El proyecto está completamente optimizado y listo para desplegar en Vercel con navegación mejorada, SEO optimizado y configuración robusta de GitHub Actions!**
