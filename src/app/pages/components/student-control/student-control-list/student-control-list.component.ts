import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/pages/models/task.model';
import { TaskService } from 'src/app/pages/services/task.service';
import { AuthService } from 'src/app/shared/auth.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-control-list',
  templateUrl: './student-control-list.component.html',
  styleUrls: ['./student-control-list.component.scss']
})
export class StudentControlListComponent implements OnInit {

  student_data: Task [] = []
  test: any [] = []
  studentObj: Task = {
    id: '',
    title: '',
    description: '',
    created_at: '',
  }

  id: string = ''
  title: string = ''
  description: string = ''
  created_at: string = ''

  status: boolean = false
  date: string = moment().format("YYYY-MM-DD");

  constructor(
    private auth: AuthService,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.taskService.getAll().subscribe(
      res => {
        this.student_data = res.map((e: any) => {
          const data = e.payload.doc.data()
          data.id = e.payload.doc.id
          return data
        })
        console.log(this.student_data)
      }, errr => {
        alert('Something went wrong!')
      }
    )
  }

  create() {
    if(this.title == '' || this.description == ''){
      this.status = true
      return
    }
    this.studentObj.id = ''
    this.studentObj.title = this.title
    this.studentObj.description = this.description
    this.studentObj.created_at = this.date

    this.taskService.create(this.studentObj)
    this.resetForm()
  }

  update() {
  }

  getById(id: any){
    this.taskService.getById(id).subscribe(
      res => {
        this.test = res.map((e:any) => {
          const data = e.payload.doc.data()
          data.id = e.payload.doc.id
          return data
        })
        console.log(this.test)
      }, err => { debugger }
    )
  }

  delete(task: Task) {
    if (window.confirm(`Tem certeza que deseja apagar a tarefa "${task.title}" ?`)) {
      this.taskService.delete(task)
    }
  }
  
  resetForm(){
    this.id = ''
    this.title = ''
    this.description = ''
  }

  submit() {
    this.create()
  }

  clickEvent() {
    this.status = !this.status;
  }

  navigate(url: string){
    this.router.navigateByUrl(url)
  }

}
