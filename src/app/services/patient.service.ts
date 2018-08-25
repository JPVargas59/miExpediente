import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Patient} from '../models/Patient';
import {Treatment} from '../models/Treatment';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {Consult} from '../models/Consult';
import {LabStudies} from '../models/LabStudies';
import {Doctor} from '../models/Doctor';
import {DoctorRequest} from '../models/DoctorRequest';

@Injectable()
export class PatientService {

  patientsCollection: AngularFirestoreCollection<Patient>;
  patientDoc: AngularFirestoreDocument<Patient>;
  patients: Observable<Patient[]>;
  patient: Observable<Patient>;

  constructor( private afs: AngularFirestore, private auth: AuthService ) {
    this.patientsCollection = this.afs.collection('patients');
  }

  // Patient's info

  getPatient(id): Observable<Patient> {
    return this.patientsCollection.doc(`${id}`).snapshotChanges().map(changes => {
      return changes.payload.data() as Patient;
    });
  }

  getDoctor(id): Observable<Doctor> {
    return this.afs.doc<Doctor>(`doctors/${id}`).valueChanges();
  }

  // Getters for collections in patient's document
  getTreatments(): Observable<Treatment[]> {
    const UID: string = this.auth.getCurrentUser().uid;
    return this.afs.collection(`patients/${UID}/treatments`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Treatment;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getConsults(): Observable<Consult[]> {
    const UID: string = this.auth.getCurrentUser().uid;
    return this.afs.collection(`patients/${UID}/consults`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Consult;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getLabStudies(): Observable<LabStudies[]> {
    const UID: string = this.auth.getCurrentUser().uid;
    return this.afs.collection(`patients/${UID}/labStudies`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as LabStudies;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getDoctors(): Observable<DoctorRequest[]> {
    const UID: string = this.auth.getCurrentUser().uid;
    return this.afs.collection(`patients/${UID}/doctors`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as DoctorRequest;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  // Getters for patient's documents
  getTreatment(tId): Observable<Treatment> {
    const UID: string = this.auth.getCurrentUser().uid;
    return this.afs.doc<Treatment>(`patients/${UID}/treatments/${tId}`).valueChanges();
  }

  getConsult(cId): Observable<Consult> {
    const UID: string = this.auth.getCurrentUser().uid;
    return this.afs.doc<Consult>(`patients/${UID}/treatments/${cId}`).valueChanges();
  }

  getStudies(lId): Observable<LabStudies> {
    const UID: string = this.auth.getCurrentUser().uid;
    return this.afs.doc<LabStudies>(`patients/${UID}/treatments/${lId}`).valueChanges();
  }

}
