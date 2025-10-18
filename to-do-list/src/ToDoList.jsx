import React, {useState} from 'react'

function ToDoList(){
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function inputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index)
        setTasks(updatedTasks);
        setNewTask("");
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    return( <div className='to-do-list'>
                    <h1>To-Do List</h1>
                    <div>
                        <input type="text"
                               placeholder='enter a task'
                               value={newTask}
                               onChange={inputChange}  />
                        
                        <button className="add-button" onClick={addTask}>Add</button>
                    </div>

                    <ol>
                        {tasks.map((task, index) => 
                            <li key={index}>
                                <span className="text">{task}</span>
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                            </li>
                        )}
                    </ol>
            </div>);
}

export default ToDoList