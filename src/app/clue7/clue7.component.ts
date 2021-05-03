import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {QrcodeComponent} from '../qrcode/qrcode.component';
import firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-clue7',
  templateUrl: './clue7.component.html',
  styleUrls: ['./clue7.component.css']
})
export class Clue7Component implements OnInit {
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
    this.router.navigateByUrl('/qrcode/6');
}
onScan(): void{
    firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 8
    }).then(( data1) =>
        {
          this.router.navigateByUrl('/clue' + 8);
        }
      ).catch((error) => {
        console.log(console);
      });
}

}
