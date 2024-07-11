import React from 'react';


const ConfirmDeleteModal = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
    window.location.reload();
  };

  const modalStyle = {
    display: "block",
    position: "fixed",
    top: "50%",
    left: "50%",
    height: "auto",
    width: "auto",
  }

  return (
    <div className="modal fade" id={`confirmDeleteModal-${todo.id}`} tabIndex="-1" role="dialog" aria-labelledby={`confirmDeleteModalLabel-${todo.id}`} aria-hidden="true" style={modalStyle}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`confirmDeleteModalLabel-${todo.id}`}>Confirmar Eliminación</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro de que deseas eliminar la tarea "{todo.title}"?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
