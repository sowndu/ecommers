import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onComplete, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem 
          key={index} 
          task={task} 
          onComplete={() => onComplete(index)} 
          onDelete={() => onDelete(index)} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
