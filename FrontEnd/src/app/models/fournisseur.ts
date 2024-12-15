import { Adresse } from "./adresse";
import { CommandeFournisseur } from './commandeFournisseur';

export interface Fournisseur {
  id?: number;
  nom?: string;
  prenom?: string;
  adresse?: Adresse;
  photo?: string;
  mail?: string;
  numTel?: string;
  idEntreprise?: number;
  commandeFournisseurs?: Array<CommandeFournisseur>;
}