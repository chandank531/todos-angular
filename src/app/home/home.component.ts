import { Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TodosService } from '../todos.service';
import { AddTodosComponent } from '../add-todos/add-todos.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule, MatCardModule, MatButtonModule, AddTodosComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent {

  todosList:any;

  constructor(private todosService: TodosService) {}

  ngOnInit() : void {
    this.getTodos();
  }

  async getTodos() {
    const todos = await this.todosService.getData();
    console.log('todos', todos);
    this.todosList = todos
  }

}
