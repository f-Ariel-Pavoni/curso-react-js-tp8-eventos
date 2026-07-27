# Formulario de Eventos en React: Controlled Components vs React Hook Form

## Descripción del proyecto

Este proyecto fue desarrollado como práctica del módulo **Manejo de eventos en formularios y componentes en React**.

El objetivo principal es implementar y comparar dos formas diferentes de trabajar con formularios en React:

1. **Formulario controlado utilizando React y useState**
2. **Formulario utilizando la librería React Hook Form**

Ambas implementaciones permiten capturar información del usuario, validar datos, manejar eventos del navegador y procesar el envío del formulario.

La comparación permite comprender las diferencias entre administrar manualmente el estado de cada campo y utilizar una herramienta especializada para simplificar la gestión del formulario.

---

# Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Hook Form
- Bootstrap

---

# Objetivos de la práctica

Durante el desarrollo se implementaron:

- Formularios controlados.
- Manejo de estado con `useState`.
- Captura de eventos en React.
- Validación manual de formularios.
- Validación utilizando React Hook Form.
- Manejo de errores.
- Reset de formularios.
- Comparación entre diferentes estrategias de implementación.

Eventos utilizados:

- `onChange`
- `onFocus`
- `onBlur`
- `onKeyDown`
- `onMouseEnter`
- `onMouseLeave`
- `onSubmit`

---

# Comparación de implementaciones

| Característica          | Formulario Controlado | React Hook Form               |
| ----------------------- | --------------------- | ----------------------------- |
| Manejo de valores       | useState              | Estado interno de la librería |
| Actualización de campos | onChange manual       | register                      |
| Validaciones            | Código propio         | Reglas integradas             |
| Manejo de errores       | Estado adicional      | formState.errors              |
| Reset del formulario    | setFormulario         | reset()                       |
| Cantidad de código      | Mayor                 | Menor                         |
| Nivel de control        | Alto                  | Delegado a la librería        |

---

# Formulario controlado con useState

En este enfoque React mantiene el control completo de los valores del formulario.

Cada campo está conectado con el estado del componente:

```javascript
const [formulario, setFormulario] = useState({
  nombre: "",
  email: "",
});
```

Los cambios realizados por el usuario son capturados mediante `onChange`:

```javascript
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormulario({
    ...formulario,
    [name]: value,
  });
};
```

La validación debe realizarse manualmente creando la lógica necesaria para verificar cada campo.

Ejemplo:

```javascript
if (!formulario.nombre.trim()) {
  nuevosErrores.nombre = "Nombre es requerido.";
}
```

Este método brinda mayor control, pero requiere más código.

---

# Formulario con React Hook Form

React Hook Form es una librería que facilita la administración de formularios.

Permite manejar:

- Valores.
- Validaciones.
- Errores.
- Envío.
- Reset del formulario.

Inicialización:

```javascript
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm();
```

Los inputs se registran mediante:

```jsx
{...register("nombre")}
```

La librería administra internamente los valores sin necesidad de crear estados para cada campo.

---

# Validación con React Hook Form

Las reglas se agregan dentro de `register`:

```javascript
register("nombre", {
  required: {
    value: true,
    message: "Nombre es requerido.",
  },
});
```

Los errores se obtienen desde:

```javascript
errors.nombre;
```

Ejemplo:

```jsx
{
  errors.nombre && (
    <small className="text-danger">{errors.nombre.message}</small>
  );
}
```

---

# Manejo de eventos implementados

## onChange

Se ejecuta cuando cambia el valor de un input.

En el formulario controlado se utiliza para actualizar el estado manualmente.

En React Hook Form esta gestión es realizada internamente mediante `register`.

---

## onFocus

Se dispara cuando un elemento recibe el foco.

Se utilizó para informar qué campo está activo:

```javascript
const handleFocus = (e) => {
  setMensaje(`El campo ${e.target.name} está activo`);
};
```

---

## onBlur

Se ejecuta cuando un campo pierde el foco.

Permite detectar cuándo el usuario abandona un input.

En React Hook Form se puede integrar dentro de `register`:

```javascript
register("nombre", {
  onBlur: handleBlur,
});
```

---

## onKeyDown

Permite detectar teclas presionadas.

Se implementó sobre el campo nombre para detectar la tecla Enter:

```javascript
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    console.log("Se presionó Enter");
  }
};
```

---

## onMouseEnter y onMouseLeave

Se utilizaron sobre el botón de envío.

Permiten cambiar dinámicamente las clases Bootstrap:

```javascript
const [btnActivo, setBtnActivo] = useState(false);
```

Al ingresar el mouse:

```javascript
setBtnActivo(true);
```

Al salir:

```javascript
setBtnActivo(false);
```

---

# Conclusión

El formulario controlado permite comprender cómo React administra estados y eventos manualmente.

React Hook Form simplifica la construcción de formularios reduciendo código repetitivo y facilitando validaciones.

Ambos enfoques son válidos y la elección depende de la complejidad del formulario y del nivel de control requerido.

---

# Instalación y ejecución

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
npm run dev
```

---

# Autor

Nombre del estudiante:

Curso:

Módulo:

Unidad:

---

# Fuentes consultadas

- React Documentation  
  https://react.dev/

- React Hook Form Documentation  
  https://react-hook-form.com/

- Bootstrap Documentation  
  https://getbootstrap.com/

- MDN Web Docs  
  https://developer.mozilla.org/
