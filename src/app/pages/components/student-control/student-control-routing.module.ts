import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentControlFormComponent } from './student-control-form/student-control-form.component';
import { StudentControlListComponent } from './student-control-list/student-control-list.component';

const routes: Routes = [
  { path: 'list', component: StudentControlListComponent },
  { path: 'form', component: StudentControlFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentControlRoutingModule { }
