import { useState } from "react"

export default function Todo ({item}){

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue]= useState (item.title);

        function handleSubmit(e){
            e.preventDefault();

        }

        function handleChange(e){
            const value= e.target.value;
        }

        return (
         <form className="todoUpdateForm" onSubmit={handleSubmit}>
             <input type='text' className="todoInput" onChange={handleChange} />
             <button> Update </button>
         </form>
         );
    }

    function TodoElement (){
        return  <div className="todoInfo">
                     {item.title} <button onClick={ ()=> setIsEdit(true) }>Edit</button>
                     <button>Delete</button>
                </div>
    }

    //Para manejar los estados cdo cambia a modo editar y eliminar genero botones y creo estados
    return (
   
        <div className='todo'>{isEdit ? <FormEdit /> : <TodoElement/> } </div>
    );
}