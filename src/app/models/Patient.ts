import { Treatment } from './Treatment';
import {LabStudies} from './LabStudies';
import {Consult} from './Consult';

export interface Patient {
  basicInfo: {
    name: string;
    birthDate: number;
  };
  contactInfo: {
    phone?: number;
    email?: string;
  };
  currentTreatment?: Treatment[];
  lastConsults?: Consult[];
  lastStudies?: LabStudies[];
  others?: Object;
}

