import { Task as TaskType } from '../../types';

import iconCross from '../../assets/icon-cross.svg';
import { Li } from '../../styles';

type Props = {
  task: TaskType,
  toggleStatusTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
};

function Task({
  task,
  toggleStatusTask,
  deleteTask,
}: Props) {
  return (
    <Li>
      <input
        id={ task.id }
        type="checkbox"
        onChange={ () => toggleStatusTask(task) }
        defaultChecked={ task.completed }
      />
      <label htmlFor={ task.id }>
        {task.name}
      </label>
      <button
        onClick={ () => deleteTask(task) }
      >
        <img src={ iconCross } alt="Remove task" />
      </button>
    </Li>
  );
}

export default Task;
