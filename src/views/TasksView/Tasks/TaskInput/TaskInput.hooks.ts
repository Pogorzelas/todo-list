import { ChangeEvent, useState } from 'react';
import { Task } from '../Tasks.types';
import { generateId } from '../../../../shared/utils/generateId';
import { TaskStatus } from '../Tasks.enums';
import { useTasksAction } from '../../../../core/store/reducers/tasks';

function useTaskInputManager() {
  const [inputValue, setInputValue] = useState('');
  const { addTask } = useTasksAction();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleAdd = () => {
    const task: Task = {
      id: generateId(),
      status: TaskStatus.TODO,
      name: inputValue,
    };
    addTask(task);
    setInputValue('');
  };

  return {
    inputValue,
    handleChange,
    handleAdd,
  };
}

export { useTaskInputManager };
