import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {LoginComponent} from './components/login/login.component';
import {DoctorSignUpComponent} from './components/sign-up/doctor-sign-up/doctor-sign-up.component';
import {PatientSignUpComponent} from './components/sign-up/patient-sign-up/patient-sign-up.component';
import {PatientProfileComponent} from './components/patient-profile/patient-profile.component';
import {DoctorProfileComponent} from './components/doctor-profile/doctor-profile.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'doctorSignUp', component: DoctorSignUpComponent },
  { path: 'patientSignUp', component: PatientSignUpComponent },
  { path: 'patient/:id', component: PatientProfileComponent },
  { path: 'doctor/:id', component: DoctorProfileComponent },



];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppRoutingModule { }
