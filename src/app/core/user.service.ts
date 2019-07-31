import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { USER_COLLECTION } from '../constants';
import { merge } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore,
  ) { }


   createUserInDb(user: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `${USER_COLLECTION}/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      userName: user.userName
    };
    return userRef.set(data);
  }

  updateUserName(uid:string,newName:string){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(  //make this ref member of service class for reusability
      `${USER_COLLECTION}/${uid}`
    );
    return userRef.set({userName:newName},{merge:true});
  }
}
