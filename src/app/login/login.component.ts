import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatStepper, MatTabChangeEvent } from '@angular/material';
import { CaptchaService } from '../Service/Captcha/captcha.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PharmaService } from '../Service/Pharma/pharma.service';

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
  CaptchaSVGPharma: any;
  CaptchaSVGVendors: any;

  constructor(private router: Router, private spinner: NgxSpinnerService,
    private matDialog: MatDialog, private captchaservice: CaptchaService,
    private formBuilder: FormBuilder, private pharmaservice: PharmaService) { }

  loginCustomerUser: any = {};
  customerloginInfo: FormGroup;
  hide: boolean = true;

  loginPharmaUser: any = {};
  pharmaloginInfo: FormGroup;
  hidePharmaPassword: boolean = true;
  pharmas: any = [];

  loginVendorUser: any = {};
  vendorloginInfo: FormGroup;
  hideVendorPassword: boolean = true;
  roles: any = ["Admin", "Member"];

  @ViewChild(MatStepper) stepper: MatStepper;
  @ViewChild(MatStepper) stepperPharma: MatStepper;
  @ViewChild(MatStepper) stepperVendor: MatStepper;

  ngOnInit() {
    this.customerloginInfo = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      captcha: ['', [Validators.required]]
    });

    this.pharmaloginInfo = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      captcha: ['', [Validators.required]],
      pharma: ['', [Validators.required]]
    });

    this.vendorloginInfo = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      captcha: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });

    this.LoadCaptcha();
    this.LoadPharma();
  }

  LoadCaptcha(){
    this.captchaservice.GetCaptcha().subscribe((data) => {      
      this.Captcha = data;
      this.CaptchaSVG = this.Captcha.data;
      this.CaptchaSVGPharma = this.Captcha.data;
      this.CaptchaSVGVendors = this.Captcha.data;
      this.customerloginInfo.controls.captcha.reset();
      this.pharmaloginInfo.controls.captcha.reset();
      this.vendorloginInfo.controls.captcha.reset();
    }, (error) => {
      console.log(error);
    }, () => {      
      if(this.loginTab == "0"){
        document.getElementById('captcha-element').innerHTML = this.CaptchaSVG;
      }else if(this.loginTab == "1"){
        document.getElementById('captcha-element-pharma').innerHTML = this.CaptchaSVGPharma;
      }else if(this.loginTab == "2"){
        document.getElementById('captcha-element-vendors').innerHTML = this.CaptchaSVGVendors;
      }
    });
  }

  LoadPharma(){
    this.pharmaservice.Pharmas().subscribe((data) => {
      this.pharmas = data;
    }, (error) => {
      console.log(error);
    });
  }

  onLoginTabClick(event: MatTabChangeEvent){
    this.LoadCaptcha();
    if(event.index === 0){
      this.customerloginInfo.reset();
      document.getElementById('captcha-element').innerHTML = this.CaptchaSVG;
    } else if(event.index === 1){
      this.pharmaloginInfo.reset();
      document.getElementById('captcha-element-pharma').innerHTML = this.CaptchaSVGPharma;
    } else if(event.index === 2){
      this.vendorloginInfo.reset();
      document.getElementById('captcha-element-vendors').innerHTML = this.CaptchaSVGVendors;
    } else {
      this.customerloginInfo.reset();
      document.getElementById('captcha-element').innerHTML = this.CaptchaSVG;
    }
  }

  CustomerLogin(){
    console.log(this.loginCustomerUser)
  }

  PharmaUserLogin(){
    console.log(this.loginPharmaUser)
  }

  VendorUserLogin(){
    console.log(this.loginVendorUser);
  }

}
