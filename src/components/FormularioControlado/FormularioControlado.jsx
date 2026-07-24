import { useState } from "react";

const FormularioControlado = () => {
  const [formulario, setFormulario] = useState({ nombre: "", email: "" });
  const [btnActivo, setBtnActivo] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulario);

    //Reset de formulario al enviar
    setFormulario({
      nombre: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

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
      console.log(`Se presiono enter sobre el cammpo ${e.target.name}.`);
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
          Formulario Eventos Controlados
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre:
            </label>

            <input
              type="text"
              id="nombre"
              value={formulario.nombre}
              name="nombre"
              className="form-control"
              placeholder="Tu nombre"
              autoComplete="name"
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico:
            </label>

            <input
              type="email"
              id="email"
              value={formulario.email}
              name="email"
              className="form-control"
              placeholder="tu@email.com"
              autoComplete="email"
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
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

export default FormularioControlado;
