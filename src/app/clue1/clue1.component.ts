import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {QrcodeComponent} from '../qrcode/qrcode.component';
import {ActivatedRoute, Router} from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-clue1',
  templateUrl: './clue1.component.html',
  styleUrls: ['./clue1.component.css']
})
export class Clue1Component implements OnInit {
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
    this.router.navigateByUrl('/qrcode/1');
}
onScan(): void{
    firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 3
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue3/true');
        }
      ).catch((error) => {
        console.log(console);
      });
}
}
