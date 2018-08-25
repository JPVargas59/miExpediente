import {Treatment} from './Treatment';

export interface Consult {
  doctor: string;
  specialty: string;
  treatment?: string;
  notes?: string;
  date: number;
}
