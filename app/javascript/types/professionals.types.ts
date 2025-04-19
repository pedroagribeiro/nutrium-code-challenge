import { Service } from './services.types';

type ProfessionalCategory = {
  name: string;
};

export type Professional = {
  id: number;
  name: string;
  license_number: number;
  professional_category: ProfessionalCategory;
  services: Service[];
};
