import {Treatment} from './Treatment';

export interface Consults {
  doctor: string;
  specialty: string;
  treatment?: string;
  notes?: string;
  date: number;
}
