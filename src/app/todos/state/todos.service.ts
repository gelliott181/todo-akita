import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { TodosStore } from './todos.store';
import { Todo, createTodo } from './todo.model';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private todosStore: TodosStore) {
  }

  get() {
    return of([createTodo({ content: 'First Todo!' })]).pipe(
      tap(entities => this.todosStore.set(entities))
    );
  }

  add(todo: Todo) {
    this.todosStore.add(todo);
  }

  update(id, todo: Partial<Todo>) {
    this.todosStore.update(id, todo);
  }

  remove(id: ID) {
    this.todosStore.remove(id);
  }
}
