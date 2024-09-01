import React from 'react';
//import './TodoItem.css';

const TodoItem = ({ task, onComplete, onDelete }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={onComplete} 
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
