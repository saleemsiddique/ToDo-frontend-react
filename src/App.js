// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/cardList';
import TaskModal from './components/taskModal';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(response => {
                console.log('Data received:', response.data);
                setTodos(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const addOrUpdateTodo = (todo) => {
        if (todo.id) {
            axios.put(`http://localhost:5000/${todo.id}`, todo)
                .then(response => {
                    console.log("Cambio realizado con exito");
                })
                .catch(error => {
                    console.error('Error updating todo:', error);
                });
        } else {
            axios.post('http://localhost:5000/', todo)
                .then(response => {
                    console.log("Tarea creada con exito");
                })
                .catch(error => {
                    console.error('Error adding todo:', error);
                });
        }
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => {
                console.error('Error deleting todo:', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Todo List</h1>
                <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#taskModal"
                    onClick={() => setEditingTodo(null)}
                >
                    Agregar Tarea
                </button>
            </header>
            <CardList todos={todos} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
            <TaskModal todo={editingTodo} addOrUpdateTodo={addOrUpdateTodo} />
        </div>
    );
}

export default App;