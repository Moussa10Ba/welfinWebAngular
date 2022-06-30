import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { UserInfos } from './user-infos.model';

@Injectable({
  providedIn: 'root'
})
export class UserInfosService {

  constructor(private angularFireStore: AngularFirestore) { }

  getUserInfosDoc(id){
    return this.angularFireStore
    .collection('userInfos-collection')
    .doc(id)
    .valueChanges()
  }

  getUserInfosList(){
    return this.angularFireStore
    .collection('userInfos-collection')
    .snapshotChanges();
  }

  createUserInfos(user: UserInfos){
    return new Promise<any>((resolve, rejects) =>{
      this.angularFireStore
      .collection("userInfos")
      .add(user)
      .then(response=>{console.log(response)}, error => rejects(error));
       })
    }

  deleteUserInfos(user: UserInfos){
    return this.angularFireStore
    .collection("userInfos")
    .doc(user.id)
    .delete();
  }
  
  updateUserInfos(user: UserInfos, id){
    return this.angularFireStore
    .collection("userInfos")
    .doc(id)
    .update({
      username: user.username,
      password: user.password,
      email:user.email,
      adresse: user.adresse,
      description: user.description,
      telephone: user.telephone,
      entreprise: user.entreprise
    });
  }
}
