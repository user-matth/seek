import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/pages/models/exam.model';
import { ExamService } from 'src/app/pages/services/exam.service';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject, } from '@angular/fire/compat/database';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss']
})
export class ExamFormComponent implements OnInit {

  examList: Exam [] = []
  examObj: Exam = {
    id : '',
    title : '',
    description : '',
    subject : '',
    question : '',
    answer_a : '',
    answer_b : '',
    answer_c : '',
    answer_d : '',
    answer_e : '',
    correct_answer : '',
  }

  answerOpt: any = [
    {id: 1, text: 'A'},
    {id: 2, text: 'B'},
    {id: 3, text: 'C'},
    {id: 4, text: 'D'},
    {id: 5, text: 'E'}
  ]

  subjectOpt: any = [
    {id: 1, text: 'Math'},
    {id: 2, text: 'English'},
    {id: 3, text: 'Art'},
    {id: 4, text: 'Science'},
    {id: 5, text: 'History'},
    {id: 6, text: 'Music'},
    {id: 7, text: 'Geography'}
  ]

  id: string = ''
  title: string = ''
  description: string = ''
  subject: string = ''
  question: string = ''
  answer_a: string = ''
  answer_b: string = ''
  answer_c: string = ''
  answer_d: string = ''
  answer_e: string = ''
  correct_answer: string = ''

  status: boolean = false

  constructor(
    private auth: AuthService,
    private examService: ExamService,
    private router: Router,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.examService.getAll().subscribe(
      res => {
        this.examList = res.map((e: any) => {
          const data = e.payload.doc.data()
          data.id = e.payload.doc.id
          return data
        })
        console.log(this.examList)
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
    this.examObj.id = ''
    this.examObj.subject = this.subject
    this.examObj.title = this.title
    this.examObj.description = this.description
    this.examObj.question = this.question
    this.examObj.answer_a = this.answer_a
    this.examObj.answer_b = this.answer_b
    this.examObj.answer_c = this.answer_c
    this.examObj.answer_d = this.answer_d
    this.examObj.answer_e = this.answer_e
    this.examObj.correct_answer = this.correct_answer

    console.log(this.examObj)
    this.examService.create(this.examObj)
    this.resetForm()
    this.navigate('/exam/list')
  }

  update() {
  }

  getById(id: string){
  }

  delete(exam: Exam) {
    if (window.confirm(`Tem certeza que deseja apagar a tarefa "${exam.title}" ?`)) {
      this.examService.delete(exam)
    }
  }
  
  resetForm(){
    this.id = ''
    this.title = ''
    this.description = ''
    this.subject = ''
    this.question = ''
    this.answer_a = ''
    this.answer_b = ''
    this.answer_c = ''
    this.answer_d = ''
    this.answer_e = ''
    this.correct_answer = ''
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
