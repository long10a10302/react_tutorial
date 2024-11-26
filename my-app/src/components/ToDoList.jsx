import React, { useState } from 'react'

const ToDoList = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, isComplated: false }]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
    };

    const toggleComplate = (index) => {
        const updatedTasks = tasks.map((task, taskIndex) =>
            taskIndex === index ? { ...task, isComplated: !task.isComplated } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To Do List</h1>
            <input
                type='text'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='Enter new todo'
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} style={{ textDecoration: task.isComplated ? 'line-through' : 'none' }}>
                        <input
                            type='checkbox'
                            checked={task.isComplated}
                            onChange={() => toggleComplate(index)}
                        />
                        {task.text}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default ToDoList;