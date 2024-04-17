import React, { useState } from 'react'

function TodoLst() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Earn Profit"]);
    const [newTask, setNewTask] = useState("");



    function handleInputChange(e) {
        setNewTask(e.target.value);
    }


    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }


    function deleteTask(index) {
        const filtered_array = tasks.filter((_, i) => { return i !== index });






        setTasks(filtered_array);
    }


    function moveTaskUp(index) {
        if (index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updateTasks = [...tasks];
            [updateTasks[index + 1], updateTasks[index]] = [updateTasks[index], updateTasks[index + 1]];
            setTasks(updateTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <div>
                <h1>To-Do List</h1>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ul>
                <ol>

                    {tasks.map((task, index) => <li key={index}><span className='text'>{task} &nbsp;  </span>
                        <button onClick={() => deleteTask(index)}> Delete</button>
                        <button onClick={() => moveTaskUp(index)}> 👆</button>
                        <button onClick={() => moveTaskDown(index)}> 👇</button>


                    </li>)}

                </ol>


            </ul>
        </div>


    )





}



export default TodoLst

