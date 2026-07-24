const FormularioControlado = () => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="card-title text-center mb-4 py-3">
          Formulario Eventos Controlados
        </h3>

        <form>
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
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico:
            </label>

            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="tu@email.com"
              autoComplete="email"
              required
            />
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

export default FormularioControlado;
