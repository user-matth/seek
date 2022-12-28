import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  taskList: Task [] = []

  id: string = ''
  title: string = ''
  description: string = ''
  created_at: string = ''

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getAll(){
    this.taskService.getAll().subscribe(
      (res) => {
        this.taskList = res.map( (e: any) => {
          const taskList = e.payload.doc.data()
          taskList.id = e.payload.doc.id
          return taskList
        })
      }, err => { debugger
      }
    )
  }

  createTask(){

  }

  updateTask(){

  }

  deleteTask(task: Task){
    if(window.confirm('Are you shure you want to delete' + task.title + ' - ' + task.id + ' ?')){
      this.taskService.delete(task)
    }
  }
}
