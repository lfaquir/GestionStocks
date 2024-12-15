import { Adresse } from "./adresse";
export interface Entreprise {
  id?: number;
  nom?: string;
  description?: string;
  adresse?: Adresse;
  codeFiscal?: string;
  photo?: string;
  email?: string;
  numTel?: string;
  steWeb?: string;
}