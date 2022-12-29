import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './core/components/auth/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './core/components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { HomeComponent } from './pages/components/home/home.component';
import { MessagesComponent } from './pages/components/messages/messages.component';
import { PomodoroComponent } from './pages/components/pomodoro/pomodoro.component';

const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'forgot-password' , component: ForgotPasswordComponent },
  { path: 'confirm-email' , component: ConfirmEmailComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'pomodoro' , component: PomodoroComponent },
  { path: 'student-manager', loadChildren: () => import('./pages/components/task/task.module').then(m => m.TaskModule) },
  { path: 'exam', loadChildren: () => import('./pages/components/exam/exam.module').then(m => m.ExamModule) },
  { path: 'messages' , component: MessagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
