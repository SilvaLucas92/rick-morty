import React, { useState, useRef } from "react";
import '../assets/css/master.css'
function Footer () {
    const [listaDeTareas, setStateTareas] = useState(['Barrer', 'Limpiar', 'comer']);
    const crossTask = useRef();
    const addTask = (e) => {
        e.preventDefault();
        let newTask = e.target.inputTask.value;
        console.log(newTask)
        setStateTareas([
            ...listaDeTareas,
            newTask
        ]);
        e.target.inputTask.value = "";
    }
    const deleteTask = () => {
        crossTask.current.classList.toggle('toggle');
    }

    return (
        <div>    
            <h1>To Do List</h1>
            <ul>
                {
                    listaDeTareas.map((task, i) => {
                    return <li onClick={deleteTask} ref={crossTask} key={i}> {task} </li>                        
                })
                }
            </ul>
            <br></br>
            <br></br>
            <form onSubmit={ addTask }>
                <input name="inputTask" type="text" />
                <button>Agregar</button>
            </form>
        </div>
    )
    
}
export default Footer