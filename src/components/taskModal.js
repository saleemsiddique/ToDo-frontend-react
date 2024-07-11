import React, { useState, useEffect } from 'react';

const TaskModal = ({ todo, addOrUpdateTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateTodo({
      id: todo ? todo.id : null,
      title,
      description,
    });
    setTitle('');
    setDescription('');
    
    // Reload the page after form submission
    window.location.reload();
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    height: 'auto',
    width: '700px'
  };

  return (
    <div className="modal fade" id="taskModal" tabIndex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true"  style={modalStyle}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="taskModalLabel">{todo ? 'Editar Tarea' : 'Crear Nueva Tarea'}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="titulo">Título:</label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                  className="form-control"
                  id="descripcion"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="submit" className="btn btn-primary">{todo ? 'Actualizar' : 'Crear'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
