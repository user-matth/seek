import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  active: boolean = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut(){
    this.auth.logOut()
  }

  navigate(url: string){
    this.router.navigateByUrl(url)
  }

  activateMenu(){
    this.active = !this.active
  }

}
