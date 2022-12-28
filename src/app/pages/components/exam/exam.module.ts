import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamFormComponent } from './exam-form/exam-form.component';

@NgModule({
  imports: [
    CommonModule,
    ExamRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
  ],
  declarations: [
    ExamListComponent,
    ExamFormComponent
  ]
})
export class ExamModule { }
