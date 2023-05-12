import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../types';

type Props = {
  itemsLeftToCompleted: number,
  addNewTask: (task: Task) => void,
  clearCompletedTasks: () => void,
};

function ViewTasks({
  addNewTask,
  clearCompletedTasks,
  itemsLeftToCompleted,
}: Props) {
  const handleInputTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newTask: Task = {
        id: uuidv4(),
        name: e.currentTarget.value,
        completed: false,
      };

      addNewTask(newTask);
      e.currentTarget.value = '';
    }
  };

  return (
    <div>
      <header>
        <h1>Todo</h1>
      </header>
      <input type="text" placeholder="Add new task" onKeyDown={ handleInputTask } />
      <Outlet />
      <footer>
        <span>
          {itemsLeftToCompleted}
          {' '}
          items left
        </span>
        <div>
          <span>
            <Link to="/">All</Link>
          </span>
          <span>
            <Link to="/active">Active</Link>
          </span>
          <span>
            <Link to="/completed">Completed</Link>
          </span>
        </div>
        <span>
          <button
            onClick={ clearCompletedTasks }
          >
            Clear Completed
          </button>
        </span>
      </footer>
    </div>
  );
}

export default ViewTasks;
