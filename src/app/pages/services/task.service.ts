import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private afs: AngularFirestore
  ) { }

  create(task: Task){
    task.id = this.afs.createId()
    return this.afs.collection('/Task').add(task)
  }

  getAll(){
    return this.afs.collection('/Task').snapshotChanges()
  }

  update(task: Task){
    this.delete(task)
    this.create(task)
  }

  delete(task: Task){
    return this.afs.doc('/Task/'+task.id).delete()
  }

}
