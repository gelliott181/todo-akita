import { ID } from '@datorama/akita';
import * as uuid from 'uuid/v4';

export interface Todo {
  id: ID;
  content: string;
  complete: boolean;
}

/**
 * A factory function that creates Todos
 */
export function createTodo(params?: Partial<Todo>) {
  return {
    id: uuid(),
    content: '',
    complete: false,
    ...params
  } as Todo;
}
