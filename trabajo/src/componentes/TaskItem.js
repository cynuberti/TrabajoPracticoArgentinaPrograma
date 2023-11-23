import React, { Fragment } from "react";

//Recibimos de props la propiedad data y el metodo onChange
//Obtenemos de data: id, description y done
//En el atributo del inputt, agregamos el metodo onChange, cuando se 
//da click, va a ejecutar el método.
const TaskItem = props => {
  const {
    onChange,
    data: { id, description, done }
  } = props;


  // El valor de checked actualiza el estilo mediante done
  const controlTachado = done ? {
    textDecoration: 'line-through'
  } : null;

  return (
    <Fragment>
      <label className="nuevoItem"
        style={controlTachado} //obtiene el estilo 
      >
        <input
          className="estadoItem"
          name={id}
          type="checkbox"
          checked={done} 
          
          //Cuando cambia captura el valor de checked (capturado en el evento e de input) para el input con name:id que desencadenó el evento.
          onChange={e => onChange({target: {name: id,checked: e.target.checked}})} 
        />
        <div className="tarea">
          <div className="estadoTexto" >{description}</div>
        </div>
      </label>
    </Fragment>

  );
};

export default TaskItem;