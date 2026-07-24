# Manejo de eventos en formularios con React

Proyecto desarrollado como parte del **Módulo 2 - Unidad 4: Manejo de eventos en formularios y componentes**.

El objetivo de este trabajo es comparar dos enfoques para la construcción y manejo de formularios en React:

- Formulario controlado mediante el estado del componente.
- Formulario implementado utilizando **react-hook-form**.

---

## Objetivos del proyecto

- Comprender el manejo de eventos en React.
- Implementar formularios controlados.
- Comparar el enfoque tradicional basado en `useState` con la utilización de `react-hook-form`.
- Analizar las diferencias en la implementación y el manejo de los datos del formulario.

---

## Tecnologías utilizadas

- React
- Vite
- Bootstrap 5
- React Hook Form _(implementación en desarrollo)_

---

## Estructura del proyecto

```text
src/
│
├── components/
│   ├── FormularioControlado/
│   │   └── FormularioControlado.jsx
│   │
│   └── FormularioReactHookForm/
│       └── FormularioReactHookForm.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Estado actual

Actualmente el proyecto incluye:

- Estructura base de la aplicación.
- Integración de Bootstrap.
- Diseño responsive mediante el sistema de grillas de Bootstrap.
- Dos componentes independientes para la comparación entre ambos enfoques.
- Estilos globales iniciales.

En las siguientes etapas se incorporará la implementación de los eventos solicitados por la consigna y la integración completa de **react-hook-form**.

---

## Decisiones de diseño

Aunque ambos formularios poseen una estructura visual similar, se decidió mantener dos componentes independientes para facilitar la comparación entre ambas implementaciones.

Esta decisión prioriza la claridad didáctica del proyecto, permitiendo observar con mayor facilidad las diferencias entre un formulario controlado y otro implementado con **react-hook-form**.

La interfaz se mantiene intencionalmente simple para centrar la atención en la implementación de la lógica y el manejo de eventos, utilizando Bootstrap para proporcionar una presentación clara y responsive.

---

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd <NOMBRE_DEL_PROYECTO>
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

---

## Capturas de pantalla

> Se incorporarán una vez finalizada la implementación de ambos formularios.

---

## Autor

**Ariel Pavoni**
