import { useState } from "react";
import { useForm } from "react-hook-form";

const FormularioReactHookForm = () => {
  const [btnActivo, setBtnActivo] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = handleSubmit((datos) => {
    console.log(datos);
    reset();
  });

  const handleFocus = (e) => {
    //estado de la interfaz - muestro mensaje en la interfaz
    setMensaje(`El campo ${e.target.name} está activo`);
    console.log(`El campo ${e.target.name} está activo`);
  };

  const handleBlur = (e) => {
    //estado de la interfaz - muestro mensaje en la interfaz
    setMensaje(`El campo ${e.target.name} perdió el foco.`);
    console.log(`El campo ${e.target.name} perdió el foco.`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter")
      console.log(`Se presionó enter sobre el campo ${e.target.name}.`);
  };

  const handleMouseEnter = (e) => {
    setBtnActivo(true);
    console.log(`Se posó sobre ${e.target.textContent}.`);
  };

  const handleMouseLeave = (e) => {
    setBtnActivo(false);
    console.log(`Abandonó ${e.target.textContent}.`);
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title text-center mb-4 py-3">
          Formulario React Hook Form
        </h3>

        <form noValidate onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>

            <input
              type="text"
              id="nombre"
              className="form-control"
              placeholder="Tu nombre"
              autoComplete="name"
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              {...register("nombre", {
                onBlur: handleBlur,
                required: { value: true, message: "Nombre es requerido." },
              })}
            />
            {errors.nombre && (
              <small className="text-danger d-block mt-1" role="alert">
                {errors.nombre.message}
              </small>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico:
            </label>

            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="tu@email.com"
              autoComplete="email"
              onFocus={handleFocus}
              {...register("email", {
                onBlur: handleBlur,
                required: {
                  value: true,
                  message: "Correo electrónico es requerido.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Formato inválido",
                },
              })}
            />
            {errors.email && (
              <small className="text-danger d-block mt-1" role="alert">
                {errors.email.message}
              </small>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={btnActivo ? "btn btn-success" : "btn btn-primary"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Enviar
            </button>
          </div>
        </form>
        {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
      </div>
    </div>
  );
};

export default FormularioReactHookForm;
