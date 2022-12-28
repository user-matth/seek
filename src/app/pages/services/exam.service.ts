import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  exam: any

  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase
  ) { }

  create(exam: Exam) {
    exam.id = this.afs.createId()
    return this.afs.collection('/Exam').add(exam)
  }

  getAll() {
    return this.afs.collection('/Exam').snapshotChanges()
  }

  filterBy() {
    this.exam = this.afs.collection('/Exam', ref => ref.where('subject','==', 'Math' )).valueChanges()
    return this.exam;
  }

  getById(id: string){
    return this.afs.collection('/Exam/' + id).get()
  }

  update(exam: Exam) {
    this.delete(exam)
    this.create(exam)
  }

  delete(exam: Exam) {
    return this.afs.doc('/Exam/' + exam.id).delete()
  }

}
