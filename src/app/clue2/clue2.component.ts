import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-clue2',
  templateUrl: './clue2.component.html',
  styleUrls: ['./clue2.component.css']
})
export class Clue2Component implements OnInit {

 private sub: any;
public qrcoderesult;
public path;
  constructor(
    private  dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.qrcoderesult = this.route.snapshot.paramMap.get('id');
    this.path = this.route.snapshot.paramMap.get('id1');
  }

opencam(): void{
    this.router.navigateByUrl('/qrcode/9');
}
onScan(): void{
    const new1 = Math.floor(Math.random() * 9) + 1;
    firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: new1
    }).then(( data1) =>
        {
          this.router.navigateByUrl('/clue' + new1);
        }
      ).catch((error) => {
        console.log(console);
      });
}
}
