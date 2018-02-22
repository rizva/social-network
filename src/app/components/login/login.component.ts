import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  createForm(){
    this.loginForm = this.fb.group({  
      username: ['', [
        Validators.required,
        Validators.minLength(5)] ],
      password: ['', [
        Validators.required,
        Validators.minLength(5)      ] ]
    });
    }
  ngOnInit() {
  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
