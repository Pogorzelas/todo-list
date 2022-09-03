import { v4 } from 'uuid';

function generateId() {
  return v4();
}

export { generateId };
