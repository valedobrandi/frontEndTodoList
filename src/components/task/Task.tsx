import { Task as TaskType } from '../../types';

import iconCross from '../../assets/icon-cross.svg';

import {
  ListItem,
  Checkbox,
  LabelCheckbox,
  ButtonRemove,
} from './styles';

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
    <ListItem tastCompleted={ task.completed }>
      <Checkbox
        id={ task.id }
        type="checkbox"
        onChange={ () => toggleStatusTask(task) }
        defaultChecked={ task.completed }
      />
      <LabelCheckbox htmlFor={ task.id }>
        {task.name}
      </LabelCheckbox>
      <ButtonRemove
        onClick={ () => deleteTask(task) }
      >
        <img src={ iconCross } alt="Remove task" />
      </ButtonRemove>
    </ListItem>
  );
}

export default Task;
