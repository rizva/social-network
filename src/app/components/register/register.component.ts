import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ], // <--- the FormControl called "name"
      username: ['', [
        Validators.required,
        Validators.minLength(5)] ],
      password: ['', [
        Validators.required,
        Validators.minLength(5)] ],
      confirmPassword: ['', [
        Validators.required
       ]]
    });
  }
  ngOnInit() {
  }
  get email() { return this.registerForm.get('email'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get username() { return this.registerForm.get('username'); }
  get password() { return this.registerForm.get('password'); }

}
