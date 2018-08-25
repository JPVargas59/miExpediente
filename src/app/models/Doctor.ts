import {Patient} from './Patient';

export interface Doctor {
  basicInfo: {
    name: string;
    birthDate: number;
  };
  contactInfo: {
    phone?: number;
    email?: string;
  };
  professionalInfo: {
    cedula: string;
    specialty?: string;
    title: string;
  };
  photoURL: string;
  lastPatients?: Patient[];
}
