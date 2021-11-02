import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;
  @Input() showLink: boolean = false;
  constructor(public route: ActivatedRoute, public todoService: TodoService) {}

  ngOnInit(): void {
    console.log(this.todo);
    
  }
}
