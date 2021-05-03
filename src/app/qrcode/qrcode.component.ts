
import {Component, ViewChild, ViewEncapsulation, OnInit, ElementRef, AfterViewInit, inject} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import firebase from 'firebase';
import * as myGlobals from 'globals';
import {GeolocationService} from '@ng-web-apis/geolocation';
// import stuff here

@Component({
    selector: 'app-qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class QrcodeComponent implements OnInit  {

private sub: any;
public qrcoderesult;

  constructor(public router: Router, public location: Location, private  dialog: MatDialog,
              private route: ActivatedRoute, public readonly geolocation$: GeolocationService, ) {
  }
qrResultString: string;
 position1: Position;
  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
this.qrResultString = resultString;
console.log(this.position1.coords);

firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).get()
  .then((d) => {
    const path1 = d.get('path');
    console.log(path1);
    switch (path1){
    case 1:
      switch (this.qrcoderesult){
      case '1':
    if ( this.qrResultString === 'AD101SFG523'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 3,
  c1: firebase.firestore.FieldValue.serverTimestamp(),
  longclue1: this.position1.coords.longitude,
  latclue1: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue3/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue1/false/' + path1 );

    }
    break;
    case '2':
    if ( this.qrResultString === 'AF101SF245G76'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 4,
  c3: firebase.firestore.FieldValue.serverTimestamp(),
  longclue2: this.position1.coords.longitude,
  latclue2: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue4/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue3/false/' + path1 );

    }
    break;
    case '3':
    if ( this.qrResultString === 'AS101NG245DFG'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 5,
  c4: firebase.firestore.FieldValue.serverTimestamp(),
  longclue4: this.position1.coords.longitude,
  latclue4: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue5/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue4/false/' + path1 );

    }
    break;
    case '4':
    if ( this.qrResultString === 'NJEY101BH23543'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 6,
  c5: firebase.firestore.FieldValue.serverTimestamp(),
  latitudeclue5: this.position1.coords.latitude,
  longclue5: this.position1.coords.longitude
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue6/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue5/false/' + path1 );

    }
    break;
    case '5':
    if ( this.qrResultString === 'GYJH941NH1012'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 7,
  c6: firebase.firestore.FieldValue.serverTimestamp(),
  longclue6: this.position1.coords.longitude,
  latclue6: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue7/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue6/false/' + path1 );

    }
    break;
    case '6':
    if ( this.qrResultString === 'KIE834BHJ46J8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 8,
  c7: firebase.firestore.FieldValue.serverTimestamp(),
  longclue7: this.position1.coords.longitude,
  latclue7: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue8/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue7/false/' + path1);

    }
    break;
    case '7':
    if ( this.qrResultString === 'AVB101SNF342HJ'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 9,
  c8: firebase.firestore.FieldValue.serverTimestamp(),
  longclue8: this.position1.coords.longitude,
  latclue8: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue9/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue8/false/' + path1);

    }
    break;
    case '8':
    if ( this.qrResultString === 'ZUB528VI23K8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 2,
  c9: firebase.firestore.FieldValue.serverTimestamp(),
  longclue9: this.position1.coords.longitude,
  latclue9: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue2/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue9/false/' + path1 );

    }
    break;
    case '9':
    if ( this.qrResultString === 'VI28BH724KKA'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 10,
  c2: firebase.firestore.FieldValue.serverTimestamp(),
  longclue2: this.position1.coords.longitude,
  latclue2: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue10/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue2/false/' + path1 );

    }
    break;
}
      break;
    case 2:
      switch (this.qrcoderesult){
      case '1':
    if ( this.qrResultString === 'AD101SFG523'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 10,
  c1: firebase.firestore.FieldValue.serverTimestamp(),
  longclue1: this.position1.coords.longitude,
  latclue1: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue10/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue1/false/' + path1 );

    }
    break;
    case '2':
    if ( this.qrResultString === 'AF101SF245G76'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 1,
  c3: firebase.firestore.FieldValue.serverTimestamp(),
  longclue3: this.position1.coords.longitude,
  latclue3: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue1/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue3/false/' + path1 );

    }
    break;
    case '3':
    if ( this.qrResultString === 'AS101NG245DFG'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 9,
  c4: firebase.firestore.FieldValue.serverTimestamp(),
  longclue4: this.position1.coords.longitude,
  latclue4: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue9/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue4/false/' + path1 );

    }
    break;
    case '4':
    if ( this.qrResultString === 'NJEY101BH23543'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 6,
  c5: firebase.firestore.FieldValue.serverTimestamp(),
  longclue5: this.position1.coords.longitude,
  latclue5: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue6/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue5/false/' + path1 );

    }
    break;
    case '5':
    if ( this.qrResultString === 'GYJH941NH1012'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 7,
  c6: firebase.firestore.FieldValue.serverTimestamp(),
  longclue6: this.position1.coords.longitude,
  latclue6: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue7/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue6/false/' + path1 );

    }
    break;
    case '6':
    if ( this.qrResultString === 'KIE834BHJ46J8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 2,

  c7: firebase.firestore.FieldValue.serverTimestamp(),
  longclue7: this.position1.coords.longitude,
  latclue7: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue2/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue7/false/' + path1 );

    }
    break;
    case '7':
    if ( this.qrResultString === 'AVB101SNF342HJ'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 3,
  c8: firebase.firestore.FieldValue.serverTimestamp(),
  longclue8: this.position1.coords.longitude,
  latclue8: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue3/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue8/false/' + path1 );

    }
    break;
    case '8':
    if ( this.qrResultString === 'ZUB528VI23K8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 5,
  c9: firebase.firestore.FieldValue.serverTimestamp(),
  longclue9: this.position1.coords.longitude,
  latclue9: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue5/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue9/false/' + path1 );

    }
    break;
    case '9':
    if ( this.qrResultString === 'VI28BH724KKA'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 8,
  c2: firebase.firestore.FieldValue.serverTimestamp(),
  longclue2: this.position1.coords.longitude,
  latclue2: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue8/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue2/false/' + path1 );

    }
    break;
}
      break;
      case 3:
      switch (this.qrcoderesult){
      case '1':
    if ( this.qrResultString === 'AD101SFG523'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 6,
  c1: firebase.firestore.FieldValue.serverTimestamp(),
  longclue1: this.position1.coords.longitude,
  latclue1: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue6/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue1/false/' + path1 );

    }
    break;
    case '2':
    if ( this.qrResultString === 'AF101SF245G76'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 8,
  c3: firebase.firestore.FieldValue.serverTimestamp(),
  longclue3: this.position1.coords.longitude,
  latclue3: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue8/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue3/false/' + path1 );

    }
    break;
    case '3':
    if ( this.qrResultString === 'AS101NG245DFG'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 5,
  c4: firebase.firestore.FieldValue.serverTimestamp(),
  longclue4: this.position1.coords.longitude,
  latclue4: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue5/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue4/false/' + path1 );

    }
    break;
    case '4':
    if ( this.qrResultString === 'NJEY101BH23543'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 9,
  c5: firebase.firestore.FieldValue.serverTimestamp(),
  longclue5: this.position1.coords.longitude,
  latclue5: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue9/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue5/false/' + path1 );

    }
    break;
    case '5':
    if ( this.qrResultString === 'GYJH941NH1012'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 2,
  c6: firebase.firestore.FieldValue.serverTimestamp(),
  longclue6: this.position1.coords.longitude,
  latclue6: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue2/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue6/false/' + path1 );

    }
    break;
    case '6':
    if ( this.qrResultString === 'KIE834BHJ46J8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 10,
  c7: firebase.firestore.FieldValue.serverTimestamp(),
 longclue7: this.position1.coords.longitude,
  latclue7: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue10/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue7/false/' + path1 );

    }
    break;
    case '7':
    if ( this.qrResultString === 'AVB101SNF342HJ'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 4,
  c8: firebase.firestore.FieldValue.serverTimestamp(),
  longclue8: this.position1.coords.longitude,
  latclue8: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue4/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue8/false/' + path1 );

    }
    break;
    case '8':
    if ( this.qrResultString === 'ZUB528VI23K8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 1,
  c9: firebase.firestore.FieldValue.serverTimestamp(),
  longclue9: this.position1.coords.longitude,
  latclue9: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue1/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue9/false/' + path1 );

    }
    break;
    case '9':
    if ( this.qrResultString === 'VI28BH724KKA'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 7,
  c2: firebase.firestore.FieldValue.serverTimestamp(),
  longclue2: this.position1.coords.longitude,
  latclue2: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue7/true/' + path1);

        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue2/false/' + path1 );

    }
    break;
}
      break;
        case 4:
      switch (this.qrcoderesult){
      case '1':
    if ( this.qrResultString === 'AD101SFG523'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 2,
  c1: firebase.firestore.FieldValue.serverTimestamp(),
  longclue1: this.position1.coords.longitude,
  latclue1: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue2/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue1/false/' + path1 );

    }
    break;
    case '2':
    if ( this.qrResultString === 'AF101SF245G76'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 1,
  c3: firebase.firestore.FieldValue.serverTimestamp(),
  longclue3: this.position1.coords.longitude,
  latclue3: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue1/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue3/false/' + path1 );

    }
    break;
    case '3':
    if ( this.qrResultString === 'AS101NG245DFG'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 3,
  c4: firebase.firestore.FieldValue.serverTimestamp(),
  longclue4: this.position1.coords.longitude,
  latclue4: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue3/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue4/false/' + path1 );

    }
    break;
    case '4':
    if ( this.qrResultString === 'NJEY101BH23543'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 4,
  c5: firebase.firestore.FieldValue.serverTimestamp(),
  longclue5: this.position1.coords.longitude,
  latclue5: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue4/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue5/false/' + path1 );

    }
    break;
    case '5':
    if ( this.qrResultString === 'GYJH941NH1012'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 9,
  c6: firebase.firestore.FieldValue.serverTimestamp(),
  longclue6: this.position1.coords.longitude,
  latclue6: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue9/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue6/false/' + path1 );

    }
    break;
    case '6':
    if ( this.qrResultString === 'KIE834BHJ46J8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 6,
  c7: firebase.firestore.FieldValue.serverTimestamp(),
  longclue7: this.position1.coords.longitude,
  latclue7: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue6/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue7/false/' + path1 );

    }
    break;
    case '7':
    if ( this.qrResultString === 'AVB101SNF342HJ'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 7,
  c8: firebase.firestore.FieldValue.serverTimestamp(),
  longclue8: this.position1.coords.longitude,
  latclue8: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue7/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue8/false/' + path1 );

    }
    break;
    case '8':
    if ( this.qrResultString === 'ZUB528VI23K8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 10,
  c9: firebase.firestore.FieldValue.serverTimestamp(),
  longclue9: this.position1.coords.longitude,
  latclue9: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue10/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue9/false/' + path1 );

    }
    break;
    case '9':
    if ( this.qrResultString === 'VI28BH724KKA'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 8,
  c2: firebase.firestore.FieldValue.serverTimestamp(),
  longclue2: this.position1.coords.longitude,
  latclue2: this.position1.coords.latitude,
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue8/true/' + path1);

        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue2/false/' + path1 );

    }
    break;
}
      break;
       case 5:
      switch (this.qrcoderesult){
      case '1':
    if ( this.qrResultString === 'AD101SFG523'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 2,
  c1: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue2/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue1/false/' + path1 );

    }
    break;
    case '2':
    if ( this.qrResultString === 'AF101SF245G76'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 1,
  c2: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue1/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue3/false/' + path1 );

    }
    break;
    case '3':
    if ( this.qrResultString === 'AS101NG245DFG'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 9,
  c9: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue9/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue4/false/' + path1 );

    }
    break;
    case '4':
    if ( this.qrResultString === 'NJEY101BH23543'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 7,
  c4: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue7/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue5/false/' + path1 );

    }
    break;
    case '5':
    if ( this.qrResultString === 'GYJH941NH1012'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 7,
  c5: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue7/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue6/false/' + path1 );

    }
    break;
    case '6':
    if ( this.qrResultString === 'KIE834BHJ46J8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 8,
  c6: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue8/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue7/false/' + path1 );

    }
    break;
    case '7':
    if ( this.qrResultString === 'AVB101SNF342HJ'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 9,
  c7: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue9/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue8/false/' + path1 );

    }
    break;
    case '8':
    if ( this.qrResultString === 'ZUB528VI23K8'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 2,
  c8: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue2/true/' + path1);
        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue9/false/' + path1 );

    }
    break;
    case '9':
    if ( this.qrResultString === 'VI28BH724KKA'){
firebase.firestore().collection('userData').doc(firebase.auth().currentUser.uid).update({
      clue: 10,
  c9: firebase.firestore.FieldValue.serverTimestamp(),
  path9: this.findMe().coords
    }).then(( data1) =>
        {
          this.router.navigateByUrl('clue10/true/' + path1);

        }
      ).catch((error) => {
        console.log(console);
      });
    }else{
      this.router.navigateByUrl('clue2/false/' + path1 );

    }
    break;
}
      break;
}});


  }

  ngOnInit(): void {
    this.qrcoderesult = this.route.snapshot.paramMap.get('id');

    this.geolocation$.subscribe(position => this.position1 = position);
  }
    findMe(): any{
  }

}
