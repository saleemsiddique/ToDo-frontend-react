// src/components/TodoList.js
import React from 'react';
import TareaCard from './tareaCard';

const CardList = ({ todos, deleteTodo, setEditingTodo }) => {
  return (
    <div className="card-list">
      {todos.map(todo => (
        <TareaCard key={todo.id} todo={todo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
      ))}
    </div>
  );
};

export default CardList;
