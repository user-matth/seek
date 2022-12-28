import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule,
  ],
  declarations: [
    HomeComponent,
    PomodoroComponent
  ]
})
export class PagesModule { }
