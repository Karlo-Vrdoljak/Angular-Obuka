import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  @Input() todo: any;
  @Input() kategorije: any[];
  form = new FormGroup({
    label: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    kategorija: new FormControl(null, [Validators.required]),
    stavke: new FormArray([]),
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form.reset({
      label: this.todo.label,
      kategorija: this.todo.kategorija,
    });

    // new FormGroup({ isCompleted: new FormControl(false, [Validators.required]), label: new FormControl(null, [Validators.required]) })
    this.todo.stavke.map((stavka: any) => {
      (this.form.controls.stavke as FormArray).push(new FormGroup({ isCompleted: new FormControl(stavka.isCompleted, [Validators.required]), label: new FormControl(stavka.label, [Validators.required]) }));
    });
    console.log(this.todo);

    console.log();
  }

  get formArray(): FormArray {
    return this.form.controls.stavke as FormArray;
  }

  log(x: any) {
    console.log(x);
  }
}
