import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss'],
})
export class TodoViewComponent implements OnInit {
  todo: any;
  isEditMode: boolean = false;
  kategorije: any[];
  constructor(private confirmationService: ConfirmationService, public todoService: TodoService, public router: Router, public route: ActivatedRoute) {
    route.params.subscribe((params) => {
      todoService.getOneTodo({ id: +params.id }).subscribe(({ todo }: any) => {
        this.todo = todo;
      });
    });
  }

  ngOnInit(): void {
    this.todoService.getAllCategories().subscribe(({ kategorije }: any) => {
      this.kategorije = kategorije;
    });
  }

  onEditToggle() {
    this.isEditMode = !this.isEditMode;
  }
  onDelete() {
    this.confirmationService.confirm({
      header: 'Are you sure you want to delete this todo?',
      message: 'This action is irreversible.',
      accept: () => {
        console.log('accepted');
      },
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
    });
  }
}
