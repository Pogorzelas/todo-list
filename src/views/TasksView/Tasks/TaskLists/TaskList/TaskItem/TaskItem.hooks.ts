import { useTasksAction } from '../../../../../../core/store/reducers/tasks';
import type { TaskStatus } from '../../../Tasks.enums';

function useTaskItemManager(id: string) {
  const { removeTask, changeTaskStatus } = useTasksAction();

  const handleRemoveTask = () => {
    removeTask(id);
  };

  const handleChangeTaskStatus = (statusToChange: TaskStatus) => () => {
    changeTaskStatus(id, statusToChange);
  };

  return {
    handleRemoveTask,
    handleChangeTaskStatus,
  };
}

export { useTaskItemManager };
