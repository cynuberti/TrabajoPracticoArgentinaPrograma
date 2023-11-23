import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const Container = () => {

  //Creamos la list list, que va a almacenar los datos.
  const [list, setList] = useState([]);
  //en el componente ListForm agregamos el atributo handleAddItem 
  //pasamos el metodo handleAddItem y actualizamos el estado de list.
  //Agregamos los atributos de list y setList al componente TaskList y le
  //pasamos el estado.
  const handleAddItem = addItem => {
      setList ([...list, addItem]);
      setAlertMessage("Se agrego una nueva tarea");
  };

  const [alertMessage, setAlertMessage] = useState("");
  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
      setAlertMessage("");
    }
  }, [alertMessage]);
return (
    <div>
      <div className='encabezado'>
      Lista de tareas a realizar
      </div>
      <TaskForm handleAddItem={handleAddItem}
      />
      <TaskList list={list} setList={setList} />
    </div>
  );
};
export default Container;
