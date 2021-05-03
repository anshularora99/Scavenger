import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
order: any;

  usererror: string;

   myForm: FormGroup;
  constructor(public fb: FormBuilder, public router: ActivatedRoute, public r: Router) {
      this.myForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern('^[0-9]*$')]]
      }
    );
  }

  ngOnInit(): void {
   this.router.queryParamMap
  .subscribe((params) => {
    this.order = { ...params.keys, ...params };
  }
);
  }

  onsubmit(form){
     firebase.auth().confirmPasswordReset(
     this.order.params.oobCode, form.value.password
   ).then((cs) => {
     this.usererror = 'Password updated';
     this.r.navigateByUrl('welcome');
    }).catch((error) => {
      this.usererror = error;
     });
  }

}
