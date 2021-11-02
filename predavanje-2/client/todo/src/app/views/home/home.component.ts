import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: any[];
  isInsertMode: boolean = false;
  kategorije: any[];
  todo: any;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllCategories().subscribe(({ kategorije }: any) => {
      this.kategorije = kategorije;
    });
    this.todoService.getAllTodos().subscribe((res: any) => {
      const { todos } = res;
      this.todos = todos;
    });
  }
  onInsertToggle() {
    this.todo = {
      label: null,
      kategorija: 1,
      stavke: [],
    };
    this.isInsertMode = !this.isInsertMode;
  }
  handleInserted(todos: any[]) {
    this.todos = todos;
    this.isInsertMode = false;
  }
}
