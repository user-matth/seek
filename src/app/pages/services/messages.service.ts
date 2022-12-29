import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Messages } from '../models/messages.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: any

  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase
  ) { }

  create(message: Messages) {
    message.id = this.afs.createId()
    return this.afs.collection('/Messages').add(message)
  }

  getAll() {
    return this.afs.collection('/Messages').snapshotChanges()
  }

  filterBy() {
    this.message = this.afs.collection('/Messages', ref => ref.where('subject','==', 'Math' )).valueChanges()
    return this.message;
  }

  getById(id: string){
    return this.afs.collection('/Messages/' + id).get()
  }

  update(message: Messages) {
    this.delete(message)
    this.create(message)
  }

  delete(message: Messages) {
    return this.afs.doc('/Messages/' + message.id).delete()
  }

}
