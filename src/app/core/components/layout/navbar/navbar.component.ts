import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  active: boolean = false
  enteredSearchValue: string = ''

  menuValues: any = [
    {id: 1, title: 'Home', url: '/home'},
    {id: 2, title: 'Pomodoro', url: '/pomodoro'},
    {id: 3, title: 'Tasks', url: '/student-manager/list'},
    {id: 4, title: 'Exams', url: '/exam/list'},
    {id: 5, title: 'Messages', url: '/messages'}
  ]

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()

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

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }

}
