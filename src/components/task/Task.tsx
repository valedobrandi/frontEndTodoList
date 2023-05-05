import { Task as TaskType } from '../../types';

type Props = {
  task: TaskType,
  toggleStatusTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
};

function Task({ task, toggleStatusTask, deleteTask }: Props) {
  return (
    <li>
      <input type="checkbox" onChange={ () => toggleStatusTask(task) } />
      <span>{task.name}</span>
      <button
        onClick={ () => deleteTask(task) }
      >
        X
      </button>
    </li>
  );
}

export default Task;
