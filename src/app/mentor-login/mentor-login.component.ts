import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.scss']
})
export class MentorLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router:Router) { }

  mentorLoginForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.mentorLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.mentorLoginForm.controls; }

  onSubmit() {
    this.submitted=true;
    if(this.mentorLoginForm.valid){
      this.router.navigate(['/signup']);
    }
  }
}
