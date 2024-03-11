import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Task as TaskType } from '../../types';
import Task from '../task/task';
import { Li } from '../../styles/styles';

type Props = {
  tasks: TaskType[],
  toggleStatusTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
  setAllTasks: (task: TaskType[]) => void
};

function ListTasks({ tasks, toggleStatusTask, deleteTask, setAllTasks }: Props) {
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(tasks);
    const [reOrderItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reOrderItem);
    console.log(newItems);

    setAllTasks(newItems);
  };

  return (
    <DragDropContext onDragEnd={ onDragEnd }>
      <Droppable droppableId="droppableTask">
        {(provided) => (
          <ul ref={ provided.innerRef } { ...provided.droppableProps }>
            {tasks.map((task, index) => (
              <Draggable
                key={ task.id }
                draggableId={ task.id }
                index={ index }
              >
                {(drag) => (
                  <Li
                    ref={ drag.innerRef }
                    { ...drag.draggableProps }
                    { ...drag.dragHandleProps }
                  >
                    <Task
                      task={ task }
                      toggleStatusTask={ toggleStatusTask }
                      deleteTask={ deleteTask }
                    />
                  </Li>)}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>)}
      </Droppable>
    </DragDropContext>
  );
}

export default ListTasks;
