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

## 🔧 Configuración de Vercel

El archivo `vercel.json` está configurado con:
- Optimizaciones de build para Next.js
- Headers de seguridad
- Redirects SEO-friendly
- Configuración de región (us-east-1)

## 📝 Pasos para Desplegar

### Opción 1: Despliegue desde GitHub
1. Conectar repositorio en [Vercel Dashboard](https://vercel.com/dashboard)
2. Importar proyecto desde GitHub
3. Configurar variables de entorno (si las necesitas)
4. Deploy automático en cada push a main

### Opción 2: Despliegue manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel --prod
```

## 📈 Monitoreo Post-Despliegue

### Analytics
- Visitar [Vercel Analytics Dashboard](https://vercel.com/dashboard/analytics)
- Ver métricas de usuarios, page views, y más

### Speed Insights
- Visitar [Vercel Speed Insights](https://vercel.com/dashboard/speed-insights)
- Monitorear Core Web Vitals
- Analizar métricas de rendimiento

## 🔍 Verificación

Después del despliegue, verificar:
1. ✅ La web carga correctamente
2. ✅ Analytics está recopilando datos (24-48 horas)
3. ✅ Speed Insights muestra métricas
4. ✅ No hay errores en la consola del navegador

## 🛠️ Solución de Problemas

### Si Analytics no funciona:
- Verificar que el dominio esté correctamente configurado en Vercel
- Asegurarse de que el proyecto esté en producción (no preview)

### Si Speed Insights no muestra datos:
- Revisar que el componente esté renderizando correctamente
- Verificar la consola del navegador por errores
- Esperar 24-48 horas para datos iniciales

## 📚 Recursos Adicionales

- [Vercel Analytics Docs](https://vercel.com/docs/analytics)
- [Vercel Speed Insights Docs](https://vercel.com/docs/speed-insights)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)