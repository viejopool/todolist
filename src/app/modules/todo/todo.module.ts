import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';


@NgModule({
  declarations: [
    ListTodoComponent,
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
