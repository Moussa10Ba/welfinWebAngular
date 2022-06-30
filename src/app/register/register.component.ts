import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { UserInfosService } from '../user-infos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup

  constructor(private formbuilder: FormBuilder, private userService: UserInfosService) { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required, Validators.minLength(8)],
          email:['', Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
          entreprise:['', Validators.required],
          description:['', Validators.required],
          telephone:['',Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(9)],
          adresse:['', Validators.required]

    })
  }

  onSubmit(){
   this.userService.createUserInfos(this.registerForm.value);
   
  }

}
