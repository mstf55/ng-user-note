import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import {  CHANGE_COLLECTION } from '../constants';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameTrackerService {

  constructor(private afs: AngularFirestore) {

   }


   getData(): Observable<any[]>  {
     return this.afs.collection(CHANGE_COLLECTION,(ref) => ref.orderBy('time', 'desc').limit(3)).snapshotChanges()
     .pipe(
       map(act => act.map(a => a.payload.doc.data()))
     );
    
  
}

}
