import { Task as TaskType } from '../../types';
import Task from '../task/Task';

type Props = {
  tasks: TaskType[],
  toggleStatusTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
};

function ListTasks({ tasks, toggleStatusTask, deleteTask }: Props) {
  const checkOrderInList = (index: number, listLength: number) => {
    if (!index) {
      return 'first';
    } if (index === listLength - 1) {
      return 'last';
    }
    return 'middle';
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={ task.id }
          task={ task }
          toggleStatusTask={ toggleStatusTask }
          deleteTask={ deleteTask }
          orderInList={ checkOrderInList(index, tasks.length) }
        />
      ))}
    </ul>
  );
}

export default ListTasks;
