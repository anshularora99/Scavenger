import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {QrcodeComponent} from '../qrcode/qrcode.component';
import firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-clue8',
  templateUrl: './clue8.component.html',
  styleUrls: ['./clue8.component.css']
})
export class Clue8Component implements OnInit {
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
    this.router.navigateByUrl('/qrcode/7');
}
onScan(): void{
    firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 9
    }).then(( data1) =>
        {
          this.router.navigateByUrl('/clue' + 9);
        }
      ).catch((error) => {
        console.log(console);
      });
}
}
