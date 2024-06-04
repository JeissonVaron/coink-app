# Coink App

Este proyecto es una aplicación móvil construida con Ionic y Angular. La aplicación tiene como objetivo proporcionar una experiencia de usuario intuitiva y eficiente para el registro de usuarios dentro del aplicativo. Utilizando los patrones de diseño más comunes de Angular e Ionic, esta aplicación se destaca por su arquitectura modular y componentes altamente reutilizables, lo que la hace fácil de mantener y expandir.

## Estructura de Archivos

```plaintext
nombre-del-proyecto/
│
├── app/
│   ├── components/
│   │   └── // Componentes de la aplicación
│   ├── interfaces/
│   │   └── // Interfaces TypeScript
│   ├── mocks/
│   │   └── // Datos ficticios para pruebas
│   ├── pages/
│   │   └── // Páginas de la aplicación
│   ├── pipes/
│   │   └── // Pipes personalizados
│   ├── services/
│   │   └── // Servicios y lógica de negocio
│   ├── shared/
│   │   └── // Elementos compartidos
│   └── app.module.ts
│
├── resources/
│   └── // Iconos y recursos multimedia
│
├── www/
│   └── // Archivos generados después del build
│
├── .editorconfig
├── .gitignore
├── angular.json
├── ionic.config.json
├── package.json
└── tsconfig.json

```

## Requisitos Previos

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Android Studio](https://developer.android.com/studio)

## Instalación y Compilación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/usuario/nombre-del-proyecto.git
   cd nombre-del-proyecto
   ```

2. Instala las dependencias:

   ```sh
   npm install
   npm install @capacitor/core @capacitor/cli
   ```

3. Ejecuta el proyecto:

   ```sh
   ionic serve
   ```

4. Compila el proyecto para generar el APK:

   ```sh
   npx cap init
   npx cap add android
   ionic build --prod
   ```

5. Genera y copia los recursos del splash screen y el icono:

   ```sh
   npx capacitor-assets generate
   ```

6. Actualiza el proyecto Android con los nuevos assets generados por Ionic Capacitor:

   ```sh
   npx cap sync
   ```

7. Una vez generado y compilado el proyecto, abre Android Studio y genera el APK:

   ```sh
   npx cap open android
   ```

## Notas adicionales:
1. Asegúrate de tener Android Studio configurado correctamente para la compilación de aplicaciones móviles.
2. Puedes personalizar los recursos generados en resources/ antes de ejecutar npx cap sync.
