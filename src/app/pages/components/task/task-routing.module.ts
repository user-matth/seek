import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'list', component: TaskListComponent },
  { path: 'form', component: TaskFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
