import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../types';
import { Container, Footer, Header, Input } from '../../styles/styles';

type Props = {
  itemsLeftToCompleted: number,
  addNewTask: (task: Task) => void,
  clearCompletedTasks: () => void,
  isDarkTheme: boolean,
  handleTheme: () => void;
};

function ViewTasks({
  addNewTask,
  clearCompletedTasks,
  itemsLeftToCompleted,
  isDarkTheme,
  handleTheme,
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
    <Container>
      <Header>
        <h1>Todo</h1>
        <button
          style={ { border: 'none', padding: 0 } }
          type="button"
          onClick={ handleTheme }
        >
          <img src={ isDarkTheme ? './icon-moon.svg' : './icon-sun.svg' } alt="" />
        </button>
      </Header>
      <Input type="text" placeholder="Write a new task" onKeyDown={ handleInputTask } />
      <Outlet />
      <Footer>
        <p>{`Tasks: (${itemsLeftToCompleted}) `}</p>
        <div>
          <span>
            <Link to="/">ALL</Link>
          </span>
          <span>
            <Link to="/active">UNDONE</Link>
          </span>
          <span>
            <Link to="/completed">DONE</Link>
          </span>
        </div>
        <span>
          <button
            onClick={ clearCompletedTasks }
          >
            <p>Clear Completed</p>
          </button>
        </span>
      </Footer>
      <p style={ { fontSize: '0.7rem', marginTop: '1rem', textAlign: 'center' } }>
        Drag and drop to reorder list
      </p>
    </Container>
  );
}

export default ViewTasks;
