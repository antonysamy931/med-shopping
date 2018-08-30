import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatStepper, MatTabChangeEvent } from '@angular/material';
import { CaptchaService } from '../Service/Captcha/captcha.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginTab: any = "0";
  registerTab: any = "0";

  Captcha: any;
  CaptchaSVG: any;  

  constructor(private router: Router, private spinner: NgxSpinnerService,
    private matDialog: MatDialog, private captchaservice: CaptchaService,
    private formBuilder: FormBuilder) { }

  loginCustomerUser: any = {};
  customerloginInfo: FormGroup;
  hide: boolean = true;

  loginPharmaUser: any = {};
  pharmaloginInfo: FormGroup;
  hidePharmaPassword: boolean = true;

  @ViewChild(MatStepper) stepper: MatStepper;
  @ViewChild(MatStepper) stepperPharma: MatStepper;

  ngOnInit() {
    this.customerloginInfo = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      captcha: ['', [Validators.required]]
    });

    this.pharmaloginInfo = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      captcha: ['', [Validators.required]]
    });

    this.LoadCaptcha();
  }

  LoadCaptcha(){
    this.captchaservice.GetCaptcha().subscribe((data) => {      
      this.Captcha = data;
      this.CaptchaSVG = this.Captcha.data;
      this.customerloginInfo.controls.captcha.reset();
    }, (error) => {
      console.log(error);
    }, () => {
      document.getElementById('captcha-element').innerHTML = this.CaptchaSVG;
      document.getElementById('captcha-element-pharma').innerHTML = this.CaptchaSVG;
    });
  }

  onLoginTabClick(event: MatTabChangeEvent){
    if(event.index === 0){
      this.customerloginInfo.reset();
    } else if(event.index === 1){
      this.pharmaloginInfo.reset();
    } else if(event.index === 2){

    } else {
      this.customerloginInfo.reset();
    }
  }

  CustomerLogin(){
    console.log(this.loginCustomerUser)
  }

  PharmaUserLogin(){
    console.log(this.loginPharmaUser)
  }

}
