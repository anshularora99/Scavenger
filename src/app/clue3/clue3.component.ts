import { Component, OnInit } from '@angular/core';
import {QrcodeComponent} from '../qrcode/qrcode.component';
import {MatDialog} from '@angular/material/dialog';
import firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-clue3',
  templateUrl: './clue3.component.html',
  styleUrls: ['./clue3.component.css']
})
export class Clue3Component implements OnInit {
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
    this.router.navigateByUrl('/qrcode/2');
}
onScan(): void{
    firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 4
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue4/true');
        }
      ).catch((error) => {
        console.log(console);
      });
}
}
