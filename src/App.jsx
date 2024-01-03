// import { Components } from "./0-componentes/Components";

import { Components, CompontsFragment } from "./0-componentes";
import ExportDefaul from "./0-componentes/ExportDefaul";




export const App = () => {
  return (
    <>
      <h1>Hola soy el componente App</h1>
      <span>
        en este componente se va imprimir otros componentes hijos con sus
        respectivas propiedades o protype
      </span>

      {/* <Components/>  exportacion individual*/}
      {/* <Components/> */}
      {/* <hr /> */}
      {/*ExportDefaul exportacion por defecto desde otro componente  */}
      {/* //TODO:Expor por defecto */}
     {/* <ExportDefaul/>  */}

      {/* <hr /> */}
      {/* //TODO:nuevo componente de framgment */}
      {/* <CompontsFragment/> */}


    </>
  );
};
