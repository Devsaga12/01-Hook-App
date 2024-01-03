//TODO: Comunicacion entre props (propiedades)
import PropTypes from 'prop-types';

export const Property = ({title , subtitulo}) => {
//   console.log(props);
  return (
    <>
      <h1>{title}</h1>
      <p> Soy una Props{subtitulo}</p>
    </>
  );
};
    

//Protypes uso y asignacion de typado
Property.PropTypes={
  title:PropTypes.string .isRequired,
  subtitulo:PropTypes.number.isRequired
}

// defaul props
