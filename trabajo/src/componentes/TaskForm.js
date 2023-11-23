import React, {useState} from "react";

const TaskForm = props => {
	//recibimos de prop el método handleAddItem para mandar el nuevo registro (id, done, description)
	const { handleAddItem } = props;
	const [description, setDescription] = useState("");
	//Creamos un manejador de evento onsubmit,
	//cuando se presiona enter en el input o click en el button-agregar
	//se usa e.preventDefault() para evitar que se refresque la página.
	//Limpiamos el estado description (setDescription)
	const handleSubmit = e => {
		e.preventDefault(); 
		handleAddItem({
		  done: false,
		  id: (+new Date()).toString(),
		  description
		});
		setDescription("");
	  };
	return (
	  <form onSubmit={handleSubmit}>
		<div className="TaskList" colspan="2">
		  <div className="input">
			<input
			  type="text"
			  className="text"
			  placeholder="Ingrese una tarea a la lista"
			  value={description}
			  onChange={e => setDescription(e.target.value)}
			/>
			
			<button
			  className="button-agregar"
			  disabled={description ? "" : "disabled"}
			>
			  Agregar
			</button>
		  </div>
		</div>
	  </form>
	);
  };
export default TaskForm;