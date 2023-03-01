import { useState } from "react"
import Todo from "./Todo";

export default function TodoApp() {

    const [title, setTitle]= useState(" ");
    const [todos, setTodos] = useState([]);

    

        //Cada vez que cambie el evento voy a actualizar el titulo
    function handleChange(event){
        //Obtengo el valor del input
        const value= event.target.value;
        //Coloco mi variable
        setTitle(value);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };

        //Ya tengo el nuevo objeto, lo inserto en el estado
        setTodos([ ...todos, newTodo]);
    }

    return(
    <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input 
        onClick={handleSubmit}
        type="submit" 
        value="Create to do"
        className="buttonCreate"/>
            {}
        </form>

        <div className="todoContainer">
            {
                todos.map(item =>(
                    <Todo item={item}/>

                ) )
            }


        </div>

    </div>
    )
}