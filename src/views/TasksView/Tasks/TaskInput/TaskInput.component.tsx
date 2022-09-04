import React from 'react';
import { Button, TextField } from '@mui/material';
import { useTaskInputManager } from './TaskInput.hooks';
import { StyledBox } from './TaskInput.styles';

function TaskInput() {
  const { inputValue, handleChange, handleAdd } = useTaskInputManager();

  return (
    <StyledBox>
      <TextField
        size="small"
        value={inputValue}
        onChange={handleChange}
      />
      <Button
        onClick={handleAdd}
      >
        Add
      </Button>
    </StyledBox>
  );
}

export default TaskInput;
