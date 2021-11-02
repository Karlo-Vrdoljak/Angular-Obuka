import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  @Input() todo: any;
  @Input() kategorije: any[];
  @Input() isUpdate: boolean = true;
  @Output() onInsert = new EventEmitter<any>();
  form = new FormGroup({
    label: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    kategorija: new FormControl(null, [Validators.required]),
    stavke: new FormArray([]),
  });
  constructor(public todoService: TodoService, public router: Router) {}

  ngOnInit(): void {
    this.form.reset({
      label: this.todo.label,
      kategorija: this.todo.kategorija,
    });

    this.todo.stavke.map((stavka: any) => {
      (this.form.controls.stavke as FormArray).push(new FormGroup({ isCompleted: new FormControl(stavka.isCompleted, [Validators.required]), label: new FormControl(stavka.label, [Validators.required]) }));
    });
    console.log(this.todo);
  }

  get formArray(): FormArray {
    return this.form.controls.stavke as FormArray;
  }

  onSave() {
    if (this.isUpdate) {
      const params = {
        ...this.form.value,
        id: this.todo.id,
      };
      this.todoService.updateTodo(params).subscribe((result) => {
        this.router.navigateByUrl('/');
      });
    } else {
      // insert op
      this.todoService.insertTodo(this.form.value).subscribe(({ todos }: any) => {
        this.onInsert.emit(todos);
      });
    }
  }
  removeStavka(index: number) {
    this.formArray.removeAt(index);
  }
  dodajStavku() {
    this.formArray.push(new FormGroup({ isCompleted: new FormControl(false, [Validators.required]), label: new FormControl(null, [Validators.required]) }));
  }
}
