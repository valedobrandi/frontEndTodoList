import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import ViewTasks from './components/view-tasks/view-tasks';
import ListTasks from './components/list-tasks/list-tasks';

import { Task } from './types';
import { dark, light } from './styles/themes';
import { GlobalStyle } from './styles';

function App() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const completedTasks = allTasks.filter((task) => task.completed);
  const activeTasks = allTasks.filter((task) => !task.completed);

  const handleTheme = () => {
    setIsDarkTheme((state) => !state);
  };

  const toggleStatusTask = (currentTask: Task) => {
    const newTasks = allTasks.map((task) => {
      if (task.id === currentTask.id) {
        return ({
          ...task,
          completed: !task.completed,
        });
      }
      return task;
    });

    setAllTasks(newTasks);
  };

  const addNewTask = (newTask: Task) => {
    setAllTasks((prevAllTasks) => [...prevAllTasks, newTask]);
  };

  const deleteTask = (taskToDelete:Task) => {
    setAllTasks((prevAllTasks) => prevAllTasks
      .filter((task) => task.id !== taskToDelete.id));
  };

  const clearCompletedTasks = () => {
    setAllTasks((prevAllTasks) => prevAllTasks.filter((task) => !task.completed));
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={ isDarkTheme ? light : dark }>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={ <ViewTasks
              itemsLeftToCompleted={ allTasks.length - completedTasks.length }
              addNewTask={ addNewTask }
              clearCompletedTasks={ clearCompletedTasks }
              handleTheme={ handleTheme }
              isDarkTheme={ isDarkTheme }
            /> }
          >
            <Route
              index
              element={ <ListTasks
                tasks={ allTasks }
                toggleStatusTask={ toggleStatusTask }
                deleteTask={ deleteTask }
              /> }
            />
            <Route
              path="/active"
              element={ <ListTasks
                tasks={ activeTasks }
                toggleStatusTask={ toggleStatusTask }
                deleteTask={ deleteTask }
              /> }
            />
            <Route
              path="/completed"
              element={ <ListTasks
                tasks={ completedTasks }
                toggleStatusTask={ toggleStatusTask }
                deleteTask={ deleteTask }
              /> }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
