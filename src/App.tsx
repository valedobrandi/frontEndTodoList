import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Task } from './types';
import ViewTasks from './components/view-tasks/ViewTasks';
import ListTasks from './components/list-tasks/ListTasks';
import dark from './styles/themes/dark';
import ligh from './styles/themes/ligth';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const completedTasks = allTasks.filter((task) => task.completed);
  const activeTasks = allTasks.filter((task) => !task.completed);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
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
      <ThemeProvider theme={ isDarkTheme ? dark : ligh }>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={ <ViewTasks
              isDarkTheme={ isDarkTheme }
              toggleTheme={ toggleTheme }
              itemsLeftToCompleted={ allTasks.length - completedTasks.length }
              addNewTask={ addNewTask }
              clearCompletedTasks={ clearCompletedTasks }
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
