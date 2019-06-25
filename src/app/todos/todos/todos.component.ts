import { Component, OnInit } from '@angular/core';
import { TodosService } from '../state/todos.service';
import { TodosQuery } from '../state/todos.query';
import { Todo } from '../state/todo.model';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  isLoading$: Observable<boolean>;

  constructor(private todosQuery: TodosQuery,
              private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectAll();
    this.isLoading$ = this.todosQuery.selectLoading();
  }

  onTodoCreated(todo: Todo) {
    this.todosService.add(todo);
  }

  onTodoCompletionToggled(todoId: ID, completed: boolean) {
    this.todosService.update(todoId, { complete: completed });
  }

  onRemoveTodo(todoId: ID) {
    this.todosService.remove(todoId);
  }
}
