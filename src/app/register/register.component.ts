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
          password: ['', Validators.required],
          email:['', Validators.required],
          entreprise:['', Validators.required],
          description:['', Validators.required],
          telephone:['',Validators.required],
          adresse:['', Validators.required]

    })
  }

  onSubmit(){
   this.userService.createUserInfos(this.registerForm.value);
   this.registerForm.reset;
  }

}
