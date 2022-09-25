import type { ChangeEvent } from 'react';
import { useState } from 'react';
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
    const taskPayload = {
      status: TaskStatus.TODO,
      name: inputValue,
    };
    addTask(taskPayload);
    setInputValue('');
  };

  return {
    inputValue,
    handleChange,
    handleAdd,
  };
}

export { useTaskInputManager };
