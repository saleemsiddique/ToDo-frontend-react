import React from 'react';
import Button from './createButton';
import ConfirmDeleteModal from './confirmDeleteModal';

const TareaCard = ({ todo, deleteTodo, setEditingTodo }) => {
  return (
    <div className="tarea-card">
      <h3>{todo.title}</h3>
      <hr />
      <p>{todo.description}</p>
      <section className='card-actions'>
        <Button onClick={() => setEditingTodo(todo)} label="✏️" data-toggle="modal" data-target="#taskModal" />
        <Button label="🗑️" data-toggle="modal" data-target={`#confirmDeleteModal-${todo.id}`} />
      </section>
      
      {/* Modal de confirmación */}
      <ConfirmDeleteModal todo={todo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TareaCard;
