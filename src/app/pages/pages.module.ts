import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    PomodoroComponent,
    MessagesComponent
  ]
})
export class PagesModule { }
