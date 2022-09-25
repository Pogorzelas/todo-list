import type { TaskStatus } from './tasks.enums';

type Task = {
  id: string;
  name: string;
  status: TaskStatus;
}

type TaskPayload = {
  name: string;
  status: TaskStatus;
}

export type { Task, TaskPayload };
