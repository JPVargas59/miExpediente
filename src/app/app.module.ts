import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { PatientSignUpComponent } from './components/sign-up/patient-sign-up/patient-sign-up.component';
import { DoctorSignUpComponent } from './components/sign-up/doctor-sign-up/doctor-sign-up.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment.prod';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from 'angularfire2/storage';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    PatientSignUpComponent,
    DoctorSignUpComponent,
    PatientProfileComponent,
    DoctorProfileComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config, 'miExpediente'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
