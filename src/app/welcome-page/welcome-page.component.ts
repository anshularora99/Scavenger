import { Component, OnInit } from '@angular/core';

import {GeolocationService} from '@ng-web-apis/geolocation';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailPageComponent} from '../detail-page/detail-page.component';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(public readonly geolocation$: GeolocationService, private dialog: MatDialog) { }

  ngOnInit(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.geolocation$.subscribe(position => {
    }, (error => {
      if (error.code === 1){
        this.dialog.open(DetailPageComponent, dialogConfig);
      }
    }));
  }

}
