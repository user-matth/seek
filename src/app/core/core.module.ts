import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmEmailComponent } from './components/auth/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [  
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ConfirmEmailComponent
  ], imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ], exports: [
    NavbarComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule { }
