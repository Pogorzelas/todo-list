import { TaskStatus } from '../../Tasks.enums';
import { useAppSelector } from '../../../../../core/store';

function useFilterTasksByStatus(status: TaskStatus) {
  const tasks = useAppSelector((state) => state.tasks.entities);
  return tasks.filter((task) => task.status === status);
}

export { useFilterTasksByStatus };
