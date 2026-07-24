//import { useState } from "react";
import { useForm } from "react-hook-form";

const FormularioReactHookForm = () => {
  //const [mensaje, setMensaje] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((datos) => console.log(datos));

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title text-center mb-4 py-3">
          Formulario React Hook Form
        </h3>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              placeholder="Tu nombre"
              autoComplete="name"
              {...register("nombre", {
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
              type="text"
              id="email"
              name="email"
              className="form-control"
              placeholder="tu@email.com"
              autoComplete="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Correo electónico es requerido.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Formato invalido",
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
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioReactHookForm;
