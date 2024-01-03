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
o la palabra fragmen con su respectiva importacion
<frament><frament>
<>
este codigo representa el fragmento de manera mas simple 
<>


# //TODO: imprimir variables en html
dentro de la pieza , fragmento , objeto que vallamos a editar  sea el parrafo , el div , lo que sea
se requiera reemplazar algo mediante una expresion de Js usamos {} y dentro el nombre del contenido
ejemplo
export const ImprimirVariablesCompone = () => {
    const nuevoMensaje ='Hola  Maick'
  return (
    <>
      <h1 className="btn btn-danger">{nuevoMensaje}</h1>

      <p>Soy un impresor de variable</p>
    </>
  );
};
una regla que se debe tener en cuenta es que si no esta cambiando el valor de la variblo  o no tiene ninguna relacion con ningun hooks entonces no es recomendado que este dentro del funcional component, perfectamente debe estar  fuera del scoop 


const arregloChildre ={
    mensaje:'Hola Mundo',
    title:'Maick'
}
 <code>{JSON.stringify (arregloChildre) }</code>


 # Comunicacion entre props(propiedades)

 // las props son propiedades que se le asignan a ciertas funciones,  usalmente se desestructuran,las prons son un objeto que puede almacenar mucha informacion dependiendo del contesto, puede ser router 

 las props m permiten el canal de comunicacion entre el componente padre
 digamos que de las props yo estaria recibiendo una variable en el momento que desee requerir las propiedades , se deben llamar desde el archivo padre donde se esta imprimiendo el archivo app
 mediante nombre de la propiedad="valor"

# archivo  Props
export const Property = ({title}) => {
//   console.log(props);
  return (
    <>
      <h1>{title}</h1>
      <p> Soy una Props</p>
    </>
  );
};
    

# archivo raiz
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <React.StrictMode>  
    <App title="Hola , soy una props" subTitle="123"/>
   </React.StrictMode>, 
  </BrowserRouter>
)
