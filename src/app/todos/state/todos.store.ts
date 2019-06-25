import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, transaction } from '@datorama/akita';
import { Todo, createTodo } from './todo.model';

export interface TodosState extends EntityState<Todo> {
  filter: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState, Todo> {

  constructor() {
    super({ filter: 'ALL'});
  }
}

