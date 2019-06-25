import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../state/todo.model';
import { throwIfEmpty } from 'rxjs/operators';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() completed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleTodoComplete() {
    this.completed.emit(!this.todo.complete);
  }

  deleteTodo() {
    this.remove.emit();
  }
}
