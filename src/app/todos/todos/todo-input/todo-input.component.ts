import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo, createTodo } from '../../state/todo.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  todoContent: string = '';

  constructor() { }

  ngOnInit() {
  }

  onAddTodo(event: Event) {
    event.preventDefault();

    if (this.todoContent.length === 0) {
      return;
    }

    const newTodo = createTodo({
      content: this.todoContent
    });

    this.todoCreated.emit(newTodo);
    this.todoContent = '';
  }
}
