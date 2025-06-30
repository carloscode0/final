# Clínica Los Ángeles - Sitio Web

## 📋 Descripción General

Este es un sitio web moderno para la **Clínica Los Ángeles** desarrollado con Vue.js 3, TypeScript y Bootstrap. El sitio presenta una interfaz elegante y responsiva que muestra los servicios médicos, beneficios, testimonios y información de contacto de la clínica.

## 🚀 Tecnologías Utilizadas

- **Vue.js 3** - Framework de JavaScript progresivo
- **TypeScript** - Tipado estático para JavaScript
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **Bootstrap Vue Next** - Componentes Vue para Bootstrap
- **Vue Router** - Enrutamiento de la aplicación
- **Animate.css** - Animaciones CSS
- **Vite** - Herramienta de construcción rápida

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.vue      # Navegación principal
│   ├── Footer.vue      # Pie de página
│   ├── SectionHero.vue # Sección principal/banner
│   ├── SectionServicios.vue    # Sección de servicios médicos
│   ├── SectionBeneficios.vue   # Sección de beneficios
│   ├── SectionTestimonios.vue  # Sección de testimonios
│   └── SectionContacto.vue     # Formulario de contacto
├── views/              # Vistas de la aplicación
│   └── HomeView.vue    # Página principal
├── router/             # Configuración de rutas
│   └── index.ts        # Definición de rutas
├── assets/             # Recursos estáticos
├── App.vue             # Componente raíz
└── main.ts             # Punto de entrada
```

## 🎯 Funcionalidades Principales

### 1. **Navegación Inteligente**
- Header fijo con navegación suave entre secciones
- Indicador visual de la sección activa
- Diseño responsivo para móviles

### 2. **Sección Hero**
- Banner principal con imagen de fondo
- Logo animado con efecto pulse
- Botón de llamada a la acción

### 3. **Sección de Servicios**
- Presentación de servicios médicos
- Diseño en tarjetas con iconos
- Información detallada de cada servicio

### 4. **Sección de Beneficios**
- Ventajas de elegir la clínica
- Diseño visual atractivo
- Información clara y concisa

### 5. **Sección de Testimonios**
- Opiniones de pacientes
- Diseño en carrusel
- Credibilidad y confianza

### 6. **Formulario de Contacto**
- Formulario interactivo
- Validación de campos
- Información de contacto adicional

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd final
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Vista previa de producción**
   ```bash
   npm run preview
   ```

## 🎨 Características de Diseño

### Responsividad
- Diseño adaptativo para todos los dispositivos
- Navegación optimizada para móviles
- Imágenes responsivas

### Animaciones
- Transiciones suaves entre secciones
- Efectos de entrada con Animate.css
- Logo animado en la sección hero

### Accesibilidad
- Navegación por teclado
- Textos alternativos en imágenes
- Contraste adecuado

## 📱 Navegación

El sitio utiliza navegación por anclas (hash navigation) con las siguientes secciones:

- **#inicio** - Sección principal
- **#servicios** - Servicios médicos
- **#beneficios** - Ventajas de la clínica
- **#testimonios** - Opiniones de pacientes
- **#contacto** - Formulario de contacto

## 🔧 Configuración

### Variables de Entorno
El proyecto no requiere variables de entorno específicas para funcionar.

### Personalización
- **Colores**: Modificar las variables CSS en los componentes
- **Imágenes**: Reemplazar archivos en la carpeta `public/`
- **Contenido**: Editar el texto directamente en los componentes Vue

## 📄 Licencia

Este proyecto es privado y está destinado exclusivamente para la Clínica Los Ángeles.

## 👥 Contribución

Para contribuir al proyecto:
1. Crear una rama para tu funcionalidad
2. Realizar los cambios necesarios
3. Probar en diferentes dispositivos
4. Crear un pull request

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contactar al equipo de desarrollo.

---

**Desarrollado con ❤️ para la Clínica Los Ángeles**
