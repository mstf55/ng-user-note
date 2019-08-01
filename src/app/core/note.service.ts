import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Note } from '../note/note';

import { USER_COLLECTION, NOTE_COLLECTION } from '../constants';


@Injectable()
export class NoteService {

  userId:string;


  constructor(private afs: AngularFirestore,private auth:AuthService) {
    this.auth.user.subscribe((user)=>{
      if(user){
        this.userId = user.uid;
      }
    });
  }

  getData(): Observable<Note[]> {
         return this.afs.doc<Note>(`${USER_COLLECTION}/${this.userId}`)
         .collection(NOTE_COLLECTION,(ref) => ref.orderBy('time', 'desc').limit(10))
         .snapshotChanges().pipe(
            map((actions) => {
              return actions.map((a) => {
                const data = a.payload.doc.data();
                return  { id: a.payload.doc.id, content:data.content ,time:data.time};
              });
            })
          );


  }
  createNote(content: string) {
    const note = {
      content,
      time: new Date().getTime()
    };
    return this.afs.doc<any>(`${USER_COLLECTION}/${this.userId}`).collection(NOTE_COLLECTION).add(note);
  }
  
}
