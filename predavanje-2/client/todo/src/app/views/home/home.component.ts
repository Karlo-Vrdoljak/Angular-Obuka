import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: any[];
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((res: any) => {
      const { todos } = res;
      this.todos = todos;
    });
  }
}
