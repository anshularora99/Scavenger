import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {IntroPageComponent} from './intro-page/intro-page.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {Clue1Component} from './clue1/clue1.component';
import {Clue2Component} from './clue2/clue2.component';
import {Clue3Component} from './clue3/clue3.component';
import {Clue4Component} from './clue4/clue4.component';
import {Clue5Component} from './clue5/clue5.component';
import {Clue6Component} from './clue6/clue6.component';
import {Clue7Component} from './clue7/clue7.component';
import {Clue8Component} from './clue8/clue8.component';
import {Clue9Component} from './clue9/clue9.component';
import {Clue10Component} from './clue10/clue10.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {QrcodeComponent} from './qrcode/qrcode.component';
import {TermsComponent} from './terms/terms.component';
import {UpdatepasswordComponent} from './updatepassword/updatepassword.component';


const routes: Routes = [
{
  path: '', component: WelcomePageComponent
  },  {
  path: 'login', component: LoginComponent
  },
  {
   path: 'qrcode/:id' , component: QrcodeComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
   path: 'intro', component: IntroPageComponent
  },
  {
   path: 'detail', component: DetailPageComponent
  },
   {
   path: 'update', component: UpdatepasswordComponent
  },
  {
   path: 'clue1/:id/:id1', component: Clue1Component
  },
  {
   path: 'clue2/:id/:id1', component: Clue2Component
  },
  {
   path: 'clue3/:id/:id1', component: Clue3Component
  },
  {
   path: 'clue4/:id/:id1', component: Clue4Component
  },
  {
   path: 'clue5/:id/:id1', component: Clue5Component
  },
  {
   path: 'clue6/:id/:id1', component: Clue6Component
  },
  {
   path: 'clue7/:id/:id1', component: Clue7Component
  },
  {
   path: 'clue8/:id/:id1', component: Clue8Component
  },
  {
   path: 'clue9/:id/:id1', component: Clue9Component
  },
  {
   path: 'clue10/:id/:id1', component: Clue10Component
  },
  {
    path: 'terms', component: TermsComponent
  },
  {
  path: '**', redirectTo: ''
  }

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
