import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../state/todo.model';
import { throwIfEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() completed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleTodoComplete() {
    this.completed.emit(!this.todo.complete);
  }
}
