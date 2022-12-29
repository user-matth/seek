import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [
    TaskListComponent,
    TaskFormComponent
  ]
})
export class TaskModule { }
