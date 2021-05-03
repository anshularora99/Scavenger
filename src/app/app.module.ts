import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { Clue1Component } from './clue1/clue1.component';
import { Clue2Component } from './clue2/clue2.component';
import { Clue3Component } from './clue3/clue3.component';
import { Clue4Component } from './clue4/clue4.component';
import { Clue5Component } from './clue5/clue5.component';
import { Clue6Component } from './clue6/clue6.component';
import { Clue7Component } from './clue7/clue7.component';
import { Clue8Component } from './clue8/clue8.component';
import {MatDialogModule} from '@angular/material/dialog';
import { Clue9Component } from './clue9/clue9.component';
import { Clue10Component } from './clue10/clue10.component';
import firebase from 'firebase/app';

import 'firebase/auth';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsComponent } from './terms/terms.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import { BackenduiComponent } from './backendui/backendui.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { AlertdialogComponent } from './alertdialog/alertdialog.component';
const firebaseConfig = {
   apiKey: "AIzaSyAxV1sVBuV68j7BvOB6i9QXRXINM8hvfi0",
    authDomain: "theislandhunt-9bbb0.firebaseapp.com",
    databaseURL: "https://theislandhunt-9bbb0.firebaseio.com",
    projectId: "theislandhunt-9bbb0",
    storageBucket: "theislandhunt-9bbb0.appspot.com",
    messagingSenderId: "415881137007",
    appId: "1:415881137007:web:49ce1a2e2a9cc5a691769a"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    IntroPageComponent,
    Clue1Component,
    Clue2Component,
    Clue3Component,
    Clue4Component,
    Clue5Component,
    Clue6Component,
    Clue7Component,
    Clue8Component,
    Clue9Component,
    Clue10Component,
    SplashScreenComponent,
    WelcomePageComponent,
    QrcodeComponent,
    TermsComponent,
    BackenduiComponent,
    UpdatepasswordComponent,
    AlertdialogComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
    NgQrScannerModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    ZXingScannerModule,


  ],
  providers: [],
  entryComponents:[
    DetailPageComponent
  ],
  bootstrap: [AppComponent,
    LoginComponent,
    SignupComponent,
    IntroPageComponent,
    DetailPageComponent]
})
export class AppModule { }
