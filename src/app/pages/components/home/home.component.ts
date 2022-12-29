import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Messages } from '../../models/messages.model';
import { Task } from '../../models/task.model';
import { MessagesService } from '../../services/messages.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  taskList: Task [] = []
  messageList: Messages [] = []

  id: string = ''
  title: string = ''
  description: string = ''
  created_at: string = ''

  messageForm: any

  constructor(
    private taskService: TaskService,
    private router: Router,
    private messageService: MessagesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getAllMessages()
    this.messageForm = this.fb.group({
      id : [''],
      title : [''],
      description : [''],
      created_at : ['']
    })
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

  getAllMessages() {
    this.messageService.getAll().subscribe(
      res => {
        this.messageList = res.map((e: any) => {
          const data = e.payload.doc.data()
          data.id = e.payload.doc.id
          return data
        })
        console.log(this.messageList)
      }, errr => {
        alert('Something went wrong!')
      }
    )
  }

  getMessageById(exam: Messages){
    this.messageForm.controls['id'].setValue(exam.id)
    this.messageForm.controls['title'].setValue(exam.title)
    this.messageForm.controls['description'].setValue(exam.description)
    this.messageForm.controls['created_at'].setValue(exam.created_at)
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
