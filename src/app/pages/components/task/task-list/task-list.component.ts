import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/pages/models/task.model';
import { TaskService } from 'src/app/pages/services/task.service';
import { AuthService } from 'src/app/shared/auth.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskList: Task[] = []

  tasks: any
  filteredTasks: any

  filters: any = {}
  property: string

  test: any[] = []
  studentObj: Task = {
    id: '',
    title: '',
    description: '',
    tag: '',
    until_when: '',
    created_at: '',
  }

  id: string = ''
  title: string = ''
  description: string = ''
  tag: string = ''
  until_when: string = ''
  created_at: string = ''

  taskForm: any

  status: boolean = false
  date: string = moment().format("YYYY-MM-DD");

  constructor(
    private auth: AuthService,
    private taskService: TaskService,
    private router: Router,
    private fb: FormBuilder,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.getAll()
    this.taskForm = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      tag: [''],
      until_when: [''],
      created_at: [''],
    })

    this.db.list('/Task').valueChanges().subscribe(
      (tasks: any) => {
        this.tasks = tasks
        this.applyFilters()
      }
    )
  }

  private applyFilters() {
    this.tasks = _.filter(this.tasks, _.conforms(this.filters))
  }

  filterExact(property: string, rule: any) {
    this.filters[property] = (val: any) => val == rule
    this.applyFilters()
  }

  filterGreaterThan(property: string, rule: any) {
    this.filters[property] = (val: any) => val < rule
    this.applyFilters()
  }

  filterBoolean(property: string, rule: any) {
    if (!rule) this.removeFilter(property)
    else {
      this.filters[property] = (val: any) => val
      this.applyFilters()
    }
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this.filters[property] = null
    this.applyFilters()
  }

  getAll() {
    this.taskService.getAll().subscribe(
      res => {
        this.taskList = res.map((e: any) => {
          const data = e.payload.doc.data()
          data.id = e.payload.doc.id
          return data
        })
        console.log(this.taskList)
      }, errr => {
        alert('Something went wrong!')
      }
    )
  }

  create() {
    if (this.title == '' || this.description == '') {
      this.status = true
      return
    }
    this.studentObj.id = ''
    this.studentObj.title = this.title
    this.studentObj.description = this.description
    this.studentObj.tag = this.tag
    this.studentObj.until_when = this.until_when
    this.studentObj.created_at = this.created_at

    console.log(this.studentObj)
    this.taskService.create(this.studentObj)
    this.resetForm()
  }

  update() {
  }

  getById(task: Task) {
    this.taskForm.controls['id'].setValue(task.id)
    this.taskForm.controls['title'].setValue(task.title)
    this.taskForm.controls['description'].setValue(task.description)
    this.taskForm.controls['tag'].setValue(task.tag)
    this.taskForm.controls['until_when'].setValue(task.until_when)
    this.taskForm.controls['created_at'].setValue(task.created_at)
  }

  delete(task: Task) {
    if (window.confirm(`Tem certeza que deseja apagar a tarefa "${task.title}" ?`)) {
      this.taskService.delete(task)
    }
  }

  resetForm() {
    this.id = ''
    this.title = ''
    this.description = ''
    this.tag = ''
    this.until_when = ''
    this.created_at = ''
  }

  submit() {
    this.create()
  }

  clickEvent() {
    this.status = !this.status;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
  }

}
