import React, { useState } from 'react';
import './index.css';

function To_do_list() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <input
        type="text"
        placeholder="add"
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default To_do_list;
