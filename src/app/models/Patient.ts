import { Treatment } from './Treatment';
import {LabStudies} from './LabStudies';
import {Consults} from './Consults';

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
  lastConsults?: Consults[];
  lastStudies?: LabStudies[];
  others?: Object;
}

