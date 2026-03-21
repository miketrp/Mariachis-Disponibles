# Configuración de GitHub Actions para Despliegue en Vercel

## 📋 Requisitos Previos

Para habilitar el despliegue automático en Vercel, necesitas configurar las siguientes variables de entorno en tu repositorio de GitHub:

### 🔑 Variables de Entorno Necesarias

1. **VERCEL_TOKEN**: Tu token de autenticación de Vercel
2. **ORG_ID**: El ID de tu organización en Vercel
3. **PROJECT_ID**: El ID de tu proyecto en Vercel

## 🚀 Configuración Paso a Paso

### Paso 1: Obtener tu Token de Vercel

1. Inicia sesión en [Vercel](https://vercel.com)
2. Ve a tu configuración de usuario (Settings)
3. Click en "Tokens" en el menú lateral
4. Crea un nuevo token con nombre descriptivo (ej: "GitHub Actions Deploy")
5. **¡Importante!** Copia el token inmediatamente, no podrás verlo de nuevo

### Paso 2: Conectar tu Repositorio con Vercel

**Opción A: Importar desde GitHub**
1. En Vercel, click en "New Project"
2. Selecciona "Import Git Repository"
3. Conecta tu cuenta de GitHub y selecciona el repositorio
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Click en "Deploy"

**Opción B: Usar Vercel CLI**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Conectar repositorio
vercel --prod
```

### Paso 3: Obtener los IDs Necesarios

Después de conectar tu proyecto:

1. **ORG_ID**: 
   - Ve al dashboard de tu proyecto en Vercel
   - La URL mostrará: `vercel.com/[ORG_ID]/[PROJECT_NAME]`
   - El primer valor es tu ORG_ID

2. **PROJECT_ID**:
   - En el dashboard de tu proyecto
   - Ve a "Settings" → "General"
   - El Project ID estará visible ahí

### Paso 4: Configurar Secrets en GitHub

1. Ve a tu repositorio de GitHub
2. Click en "Settings" → "Secrets and variables" → "Actions"
3. Click en "New repository secret"
4. Agrega los siguientes secrets:

```bash
# Secret: VERCEL_TOKEN
# Value: [tu-token-de-vercel]

# Secret: ORG_ID  
# Value: [tu-org-id]

# Secret: PROJECT_ID
# Value: [tu-project-id]
```

### Paso 5: Verificar la Configuración

Después de configurar los secrets, el workflow automáticamente:

- ✅ Detectará que las variables están configuradas
- ✅ Ejecutará el despliegue en pushes a la rama main
- ✅ Creará previews en pull requests
- ✅ Mostrará mensajes informativos si algo falla

## 🔧 Solución de Problemas

### Si el despliegue falla:

1. **Verifica los logs del workflow** en GitHub Actions
2. **Asegúrate de que los secrets estén correctamente configurados**
3. **Comprueba que el proyecto build localmente**:
   ```bash
   npm run build
   ```

### Si las variables no están configuradas:

El workflow mostrará un mensaje informativo y continuará con el build y tests, pero omitirá el despliegue:

```
⚠️ VERCEL_TOKEN no configurado. El despliegue se saltará.
📋 Para configurar el despliegue automático:
   1. Ve a Settings → Secrets → Actions en tu repositorio de GitHub
   2. Agrega VERCEL_TOKEN con tu token de Vercel
   3. Agrega ORG_ID con tu ID de organización
   4. Agrega PROJECT_ID con tu ID de proyecto
```

## 📁 Archivos Relacionados

- `.github/workflows/deploy.yml` - Workflow de GitHub Actions
- `DEPLOY_VERCEL.md` - Instrucciones generales de despliegue
- `vercel.json` - Configuración de Vercel

## 🔄 Flujo de Trabajo

El workflow se ejecuta en:

- **Push a main/master**: Despliegue a producción
- **Pull Request**: Despliegue de preview (si está configurado)

## 📝 Notas Importantes

- **Seguridad**: Nunca compartas tus tokens públicamente
- **Tokens**: Puedes generar múltiples tokens para diferentes propósitos
- **Organizaciones**: Si trabajas en una organización, asegúrate de usar el ORG_ID correcto

## 🚀 Alternativas

Si prefieres no usar GitHub Actions, puedes desplegar manualmente:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar manualmente
vercel --prod
```

---
**¿Problemas con la configuración?** Consulta el archivo `DEPLOY_VERCEL.md` para más detalles o despliega manualmente usando Vercel CLI.