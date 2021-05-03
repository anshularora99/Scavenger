import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import firebase from 'firebase';
import 'firebase/firestore';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  message = '';
  userError: string;
  constructor(public fb: FormBuilder, public router: Router) {
    this.myForm = this.fb.group(
      {
        email: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required]
      }
    );
  }
onsubmit(form): void{
    firebase.auth()
      .signInWithEmailAndPassword(form.value.email, form.value.password)
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
            });

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
    })
      .catch((error) => {
        console.log(error);
        switch (error.code){
          case 'auth/wrong-password':
            this.userError = 'Incorrect Password';
            break;
            case 'auth/user-not-found':
            this.userError = 'Email is not registered';
            break;
        }
  }

    );
}

  ngOnInit(): void {
  }

}
