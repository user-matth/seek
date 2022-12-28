import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''

  status: boolean = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(url: string){
    this.router.navigate([url])
  }

  logIn(){
    if(this.email == '' || this.password == ''){
      this.status = true
      return
    }
    this.auth.login(this.email, this.password)
    this.email = ''
    this.password = ''
  }

  signInWithGoogle(){
    this.auth.googleSignIn()
  }

}
