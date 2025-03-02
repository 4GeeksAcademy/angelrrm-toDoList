import React, { useState } from 'react';

const Home = () => {
  const [todos, setTodos] = useState([
    { done: false, title: 'Make the bed', id: Math.random() * 10 },
    { done: false, title: 'Wash my hands', id: Math.random() * 10 },
    { done: false, title: 'Eat', id: Math.random() * 10 },
    { done: false, title: 'Walk the dog', id: Math.random() * 10 }
  ]);
  const [taskInput, setTaskInput] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === '') return;
    setTodos([
      ...todos,
      { title: taskInput, done: false, id: Math.random() * 10 }
    ]);
    setTaskInput('');
  };

  const deleteTask = (taskId) => {
    setTodos(todos.filter(task => task.id !== taskId));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h2>To-Do List</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleFormSubmit} className="d-flex mb-3">
            <input
              type="text"
              className="form-control me-2"
              placeholder="What needs to be done?"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <button type="submit" className="btn btn-success">Add</button>
          </form>
          <ul className="list-group">
            {todos.length === 0 ? (
              <li className="list-group-item text-center text-muted">No tasks, add some!</li>
            ) : (
              todos.map(task => (
                <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{task.title}</span>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>&times;</button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
