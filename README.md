# React + Vite

primer componente y comunicacion

para establecer una comunicacion entre componentes  se debe exportar e importar 
en el componente raiz se importa y el componente hijo se exporta  se debe tener en cuenta que los funcional components inician en mayuscula


# TODO: importacion 1p componente
import { Components } from "./0-componentes/Components";

export const App = () => {
  return (
    <>
      <h1>Hola soy el componente App</h1>
      <span>
        en este componente se va imprimir otros componentes hijos con sus
        respectivas propiedades o protype
      </span>

      <Components/> //TODO:componente fragment
    </>
  );
};
# TODO: exportacion 2d componente
export const Components = () => {
  return (
    <h4>
      Soy el 2d componente y quiero ser imprimido en el componente App: hijo 1
    </h4>
  );
};

# TODO: Export defaul
function ExportDefaul(){
    return(<h1>Exportacion por defecto</h1>)
  }
  
  export default ExportDefaul;


# CompontsFragment
si en nuestra app requerimos un titulo y otro mensaje , debo usar un nodo padre mas conocido como fragmen

<>
<>
