import FormularioControlado from "./components/FormularioControlado/FormularioControlado";
import FormularioReactHookForm from "./components/FormularioReactHookForm/FormularioReactHookForm";

const App = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>Manejo de eventos en formularios</h1>
        <p className="lead">
          Comparación entre un formulario controlado y uno implementado con
          React Hook Form.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <FormularioControlado />
        </div>
        <div className="col-12 col-lg-6">
          <FormularioReactHookForm />
        </div>
      </div>
    </div>
  );
};

export default App;
