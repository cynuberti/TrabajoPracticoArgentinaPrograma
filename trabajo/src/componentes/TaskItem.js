

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



  return (
    <Fragment>
      <label className="nuevoItem">
        <input
          className="estadoItem"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div>
         <div className="estadoTexto">{description}</div>
         <button onClick={tachar}>Completada</button>
         </div>
      </label>
    </Fragment>
     
  );
  
  /* NO FUNCIONA 
  function tachar(onClick) {
    const elem = document.getElementById("estadoTexto");
    elem.style.textdecoration = "line-trough"; 
  }
*/

};


export default TaskItem;