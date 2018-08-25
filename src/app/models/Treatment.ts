export interface Treatment {
  date: number;
  medicine?: Medicine[];
  prescribedBy: {
    id: string;
    name: string;
  };
  notes?: string;
}

export interface Medicine {
  name: string;
  dosage: {
    quantity: number;   // Cuanto medicamento
    frequency: number;  // Cada cuanto tiempo
    duration: number;   // Durante cuanto tiempo
  };
  notes?: string;
}
