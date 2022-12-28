import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { StudentControlListComponent } from './student-control-list/student-control-list.component';
import { StudentControlRoutingModule } from './student-control-routing.module';
import { StudentControlFormComponent } from './student-control-form/student-control-form.component';

@NgModule({
  imports: [
    CommonModule,
    StudentControlRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [
    StudentControlListComponent,
    StudentControlFormComponent
  ]
})
export class StudentControlModule { }
