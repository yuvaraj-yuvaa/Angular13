import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../users.service'

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userDetails: any;

  constructor( public userervice: UserserviceService) { }

  ngOnInit(): void {
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


  onSignInFormSubmit(res:NgForm) {
    this.userDetails = this.userervice.getUserDetails(res.value)
    res.reset()
  }

}
