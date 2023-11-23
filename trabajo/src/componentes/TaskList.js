
import React from "react";
import TaskItem from "./TaskItem";

//recibimos de props la propiedad list y el metodo setList, 
//recorremos list con map, para generar los compoonentes de TaskItem





const TaskList = props => {

  const { list, setList } = props;

  //Creamos un manejador de eventos onChange para el componente TaskItem
  //Creamos un método onChangeStatus, para el manejador de onChange
  //onChangeStatus va a recibir los datos de TaksItem que haya cambiardo
  //recoremos con map list y  actualizamos los valores
  const onChangeStatus = e => {
    const { name, checked } = e.target;

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
   
  };


  //El metodo onClickRemoveItem para manejar onClick
  //El método onClickRemoveItem filtra la lista eliminando todos los items
  // done == true y actualiza la lista con setList

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  const chk = list.map(item => (
    <TaskItem 
    key={item.id} 
    data={item} 
    onChange={onChangeStatus} 
     />
  ));

  return (
    //Si la list esta vacia mostramos: "No hay tareas pendientes"
    //y ocultamos el boton-borrar.

    <div className="TaskList">
      {list.length ? chk : "No hay tareas pendientes."}
      {list.length ? (
        <p>
          <button className="boton-borrar" onClick={onClickRemoveItem}>
            Borrar terminadas.
          </button>
        </p>
      ) : null}
    </div>
    

  );
};
export default TaskList;