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
  @Input() isView: boolean = false;

  constructor(public route: ActivatedRoute, public todoService: TodoService) {
    if (route.snapshot.params?.id) {
      this.isView = true;
    }
    this.isView &&
      route.params.subscribe((params) => {
        todoService.getOneTodo({ id: +params.id }).subscribe(({ todo }: any) => {
          this.todo = todo;
        });
      });
  }

  ngOnInit(): void {}
}
