import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import 'firebase/firestore';
import {Router} from '@angular/router';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.css']
})
export class IntroPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {

  }
  onBegin(): void{
        firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).get().then(( data1) =>
        {
          console.log(data1.get('clue'));
          this.router.navigateByUrl('/clue' + data1.get('clue') + '/1/' + data1.get('path') );
        }
      ).catch((error) => {
        console.log(console);
      });
  }

}
