import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { Messages } from '../../models/messages.model';
import { MessagesService } from '../../services/messages.service';
import * as moment from 'moment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messageList: Messages [] = []
  messageObj: Messages = {
    id: '',
    title: '',
    description: '',
    created_at: '',
  }
  test: Observable<Messages[]>;

  id: string = ''
  title: string = ''
  description: string = ''
  created_at: string = ''

  Uid: string = ''
  messageForm: any
  date: string = moment().format("YYYY-MM-DD");

  status: boolean = false

  constructor(
    private auth: AuthService,
    private messageService: MessagesService,
    private router: Router,
    private fb: FormBuilder,
    private readonly firestore: Firestore
  ) { }

  ngOnInit() {
    this.getAll()
    this.messageForm = this.fb.group({
      id : [''],
      title : [''],
      description : [''],
      created_at : ['']
    })
  }

  getAll() {
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

  create() {
    if(this.title == '' || this.description == ''){
      this.status = true
      return
    }
    this.messageObj.id = ''
    this.messageObj.title = this.title
    this.messageObj.description = this.description
    this.messageObj.created_at = this.date

    console.log(this.messageObj)
    this.messageService.create(this.messageObj)
    this.resetForm()
  }

  update() {
  }

  getById(exam: Messages){
    this.messageForm.controls['id'].setValue(exam.id)
    this.messageForm.controls['title'].setValue(exam.title)
    this.messageForm.controls['description'].setValue(exam.description)
    this.messageForm.controls['created_at'].setValue(exam.created_at)
  }

  delete(exam: Messages) {
    if (window.confirm(`Tem certeza que deseja apagar a mensagem "${exam.title}" ?`)) {
      this.messageService.delete(exam)
    }
  }

  clickEvent() {
    this.status = !this.status;
  }

  navigate(url: string){
    this.router.navigateByUrl(url)
  }

  filterData(){
    this.test = this.messageService.filterBy()
    console.log(this.test)
    return this.test
  }

  resetForm(){
    this.id = ''
    this.title = ''
    this.description = ''
    this.created_at = ''
  }

}
