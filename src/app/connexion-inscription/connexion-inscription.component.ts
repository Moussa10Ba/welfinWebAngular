import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-connexion-inscription',
  templateUrl: './connexion-inscription.component.html',
  styleUrls: ['./connexion-inscription.component.css']
})
export class ConnexionInscriptionComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
        {
          username:['', Validators.required],
          password:['', Validators.required]
        }
    );
  }

  onLoginSubmit(){
    const data = this.loginForm.value;
   console.log(data);
   
  }

}
