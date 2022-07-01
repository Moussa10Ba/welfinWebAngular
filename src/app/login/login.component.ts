import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  erroRMessage: string
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.erroRMessage = '';
    this.loginForm = this.formBuilder.group(
      {
        email:['', Validators.required,],
        password:['', Validators.required]
      }
  );
  }

  onLoginSubmit(){
    
    console.log(this.loginForm.value);
    if(this.loginForm.invalid){
      console.log(this.loginForm.value);
      
      alert('invalid Forms');
          return ;
    }
   
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password);
  }

}
