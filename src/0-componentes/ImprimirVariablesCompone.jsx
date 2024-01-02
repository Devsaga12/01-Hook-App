const nuevoMensaje ='Hola  Maick'

const arregloChildre ={
    mensaje:'Hola Mundo',
    title:'Maick'
}

//los objetos no son permitidos como un react chaild (hijo), si se requiere renderizar se debe hacer mendiante un arreglo,  el cual hacemos evaluando uma condicion


export const ImprimirVariablesCompone = () => {
    
  return (
    <>
      <h1 className="btn btn-danger">{nuevoMensaje}</h1>

      <p>Soy un impresor de variable : <code>{JSON.stringify (arregloChildre) }</code> </p>
    </>
  );
};
