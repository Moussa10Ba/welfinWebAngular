import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { UserInfos } from '../user-infos.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: boolean;
  constructor( private afAuth: AngularFireAuth, private router: Router,) { }

   async loginUser(email: string, password: string) {
  this.afAuth.signInWithEmailAndPassword(email, password)
      .then(()=>{
            localStorage.setItem('token', 'true');
            this.router.navigate(['/dashboard']);
      }, err => {
              alert(" Invalide email/password");
              this.router.navigate(['/connexion']);
      }
      )
  }
  // Sign out
  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/connexion']);
    }, err => {
      alert(err.message);
    });
  }
}
