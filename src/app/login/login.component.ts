import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserserviceService } from '../users.service'

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userDetails: any;
  loginForm: FormGroup;

  constructor( public userervice: UserserviceService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "Username": new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z-]+$/), Validators.minLength(2)] ),
      "Password": new FormControl(null, [Validators.required, Validators.pattern(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/), Validators.minLength(2)])
    })

    $('.toggle').click(() =>{
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });

  }

  get userNameCtrl() {
    return this.loginForm.get('Username')
  }

  get userPasswordCtrl() {
    return this.loginForm.get('Password')
  }

  getUserData() {
    this.loginForm.setValue({
      "Username": "admin",
      "Password": "Admn@123"
    })
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

  onSignInFormSubmit(res:NgForm) {
    this.userDetails = this.userervice.getUserDetails(res.value)
    res.reset()
  }

}
