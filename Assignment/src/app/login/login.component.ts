import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'app';
  flightCheckInForm: FormGroup;
  errorMsg: string;
  bookingCode = new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]*")]);
  familyName = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z]*")]);
  langSel: boolean;

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.langSel = false;
    this.http.get('').subscribe(data => {
      console.log(data);
    },
      err => {
        let erroe;
        console.log("Error Occured.");
      }
    );
    this.flightCheckInForm = new FormGroup({
      // email: new FormControl('',Validators.required),
      // pwd: new FormControl(),
      // confirmPwd: new FormControl(),
      // gender: new FormControl(),
      // terms: new FormControl()

    })
  }

 

  validateBookingCode() {

    return this.bookingCode.hasError('required') ? 'Booking code' :
      this.bookingCode.hasError('pattern') ? 'Invalid booking code' : 'Booking code';
  }

  validateFamilyName() {
    return this.familyName.hasError('required') ? 'Family name' :
      this.familyName.hasError('pattern') ? 'Invalid family name' : 'Family name';
  }



  languageSelect() {
    if (window.location.href.match('ed')) {
      window.location.href = "http://localhost:8091/en";
    } else {
      window.location.href = "http://localhost:8091/ed";
    }
  }


  submitted(form) {
    var option = {
      "bookingId": this.bookingCode.value,
      "familyName": this.familyName.value
    }
    const httpOptions = {
      headers: new HttpHeaders(
        {'Accept-Language': this.langSel ? 'ed': 'en'})
    };
    this.http.post('http://localhost:8091/newapp/checkin', option, httpOptions)
      .subscribe(
      res => {
        console.log(res);
        if (res['status'] === 200) {
          this.errorMsg="";
          this.route.navigate(['home']);
        }
      },
      error => {
        console.log("Error occured");
        this.errorMsg = error.error.Description;
      }
      );
  }
}