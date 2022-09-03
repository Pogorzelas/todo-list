import { ChangeEvent, useState } from 'react';
import { Task } from '../Tasks.types';
import { generateId } from '../../../../shared/utils/generateId';
import { TaskStatus } from '../Tasks.enums';
import { useTasksAction } from '../../../../core/store/reducers/tasks';

function useTaskInputManager() {
  const [value, setValue] = useState('');
  const { addTask } = useTasksAction();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleAdd = () => {
    const task: Task = {
      id: generateId(),
      status: TaskStatus.TODO,
      name: value,
    };
    addTask(task);
    setValue('');
  };

  return {
    value,
    handleChange,
    handleAdd,
  };
}

export { useTaskInputManager };
