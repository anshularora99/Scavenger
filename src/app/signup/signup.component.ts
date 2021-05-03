import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import {Router} from '@angular/router';
import * as sgMail from '@sendgrid/mail';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  message: string = '';
  usererror: any;
  constructor(public fb: FormBuilder,public router: Router) {
    this.myForm = this.fb.group(
      {
        Name: ['', [Validators.required]],
        Email: ['', [Validators.required]],
        InstaUsername: ['', [Validators.required]],
        PIN: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6),
  Validators.pattern('^[0-9]*$')]]
      }
    );
  }
  sendEmail() {
    }
  onSubmit(signupform): void{
    const email: string = signupform.value.Email;
    const password: string = signupform.value.PIN;
    const displaName: string = signupform.value.Name;
    const instaname: string = signupform.value.InstaUsername;

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
      (response) => {
        response.user.updateProfile({
          displayName: displaName,
          photoURL: instaname
        }).then(() => {
          firebase.auth()
            .sendPasswordResetEmail(response.user.email)
            .then(() => {
              firebase.auth()
                .signInWithEmailAndPassword(response.user.email, password)
                .then((data) => {
      this.message = 'You have been logged in successfully';
      const math = Math.floor(Math.random() * 4 + 1) ;
      let clue1;
      switch (math){
        case 1:
          clue1 = 1;
          break;
        case 2:
          clue1 = 4;
          break;
          case 3:
          clue1 = 3;
          break;
          case 4:
          clue1 = 5;
          break;
          case 5:
          clue1 = 6;
          break;

      }
      const docRef = firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid);
      docRef.get().then((thisDoc) => {
          if (thisDoc.exists){
            docRef.update({
              lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
              email: firebase.auth().currentUser.email,
              name: firebase.auth().currentUser.displayName,
            }
            );

          }
          else{
            docRef.set({
               email: firebase.auth().currentUser.email,
               name: firebase.auth().currentUser.displayName,
               lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
               inm: firebase.auth().currentUser.photoURL,
               clue: clue1,
               path: math
            }).then(( data1) =>
        {
        }
      ).catch((error) => {
      });
          }
        });
      this.router.navigateByUrl('/intro');
    }).catch((error) => {this.usererror = error;});
            });
        });
      })
      .catch((error) => {
        this.usererror = error;
      });
  }

  ngOnInit(): void {
  }

}
