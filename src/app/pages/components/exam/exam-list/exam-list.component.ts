import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/pages/models/exam.model';
import { ExamService } from 'src/app/pages/services/exam.service';
import { AuthService } from 'src/app/shared/auth.service';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  examList: Exam [] = []
  test: Observable<Exam[]>;

  id: string = ''
  subject: string = ''
  title: string = ''
  description: string = ''
  question: string = ''
  answer: string = ''
  correct_answer: string = ''

  Uid: string = ''
  examForm: any

  status: boolean = false

  constructor(
    private auth: AuthService,
    private examService: ExamService,
    private router: Router,
    private fb: FormBuilder,
    private readonly firestore: Firestore
  ) { }

  ngOnInit() {
    this.getAll()
    this.examForm = this.fb.group({
      id : [''],
      title : [''],
      description : [''],
      subject : [''],
      question : [''],
      answer_a : [''],
      answer_b : [''],
      answer_c : [''],
      answer_d : [''],
      answer_e : [''],
      correct_answer : [''],
    })
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

  update() {
  }

  getById(exam: Exam){
    this.examForm.controls['id'].setValue(exam.id)
    this.examForm.controls['title'].setValue(exam.title)
    this.examForm.controls['description'].setValue(exam.description)
    this.examForm.controls['subject'].setValue(exam.subject)
    this.examForm.controls['question'].setValue(exam.question)
    this.examForm.controls['answer_a'].setValue(exam.answer_a)
    this.examForm.controls['answer_b'].setValue(exam.answer_b)
    this.examForm.controls['answer_c'].setValue(exam.answer_c)
    this.examForm.controls['answer_d'].setValue(exam.answer_d)
    this.examForm.controls['answer_e'].setValue(exam.answer_e)
    this.examForm.controls['correct_answer'].setValue(exam.correct_answer)
  }

  delete(exam: Exam) {
    if (window.confirm(`Tem certeza que deseja apagar a tarefa "${exam.title}" ?`)) {
      this.examService.delete(exam)
    }
  }

  clickEvent() {
    this.status = !this.status;
  }

  navigate(url: string){
    this.router.navigateByUrl(url)
  }

  filterData(){
    this.test = this.examService.filterBy()
    console.log(this.test)
    return this.test
  }

}
