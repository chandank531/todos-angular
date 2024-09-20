import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodosService } from '../todos.service';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-add-todos',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule,MatButtonModule],
  templateUrl: './add-todos.component.html',
  styleUrl: './add-todos.component.css'
})
export class AddTodosComponent {
  todoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  })

  submitted = false;

  constructor(private todosService: TodosService) {}

  async addTodo() {
    this.submitted = true;
    if (this.todoForm.valid) {
      await this.todosService.createData(this.todoForm.value).then(() => {
        this.todoForm.reset();
        this.submitted = false;
      })
    }
  }

  cancel() {
    this.submitted = false;
    this.todoForm.reset();
  }
}
