import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { ExamListComponent } from './exam-list/exam-list.component';

const routes: Routes = [
  { path: 'list', component: ExamListComponent },
  { path: 'form', component: ExamFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
