import { Box, Typography } from '@mui/material';
import React from 'react';
import type { TaskStatus } from '../../Tasks.enums';
import TaskItem from './TaskItem';
import { useFilterTasksByStatus } from './TaskList.hooks';

type Props = {
  listStatus: TaskStatus;
  title: string;
}

function TaskList({ listStatus, title }: Props) {
  const filteredTasks = useFilterTasksByStatus(listStatus);

  return (
    <Box>
      <Typography
        variant="h5"
      >
        {title}
      </Typography>
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          status={task.status}
        />
      ))}
    </Box>
  );
}

export default TaskList;
