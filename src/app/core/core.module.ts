import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [  
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
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
