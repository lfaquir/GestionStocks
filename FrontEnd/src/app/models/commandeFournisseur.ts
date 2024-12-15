import { Fournisseur } from "./fournisseur";

export interface CommandeFournisseur {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idEntreprise?: number;
  fournisseur?: Fournisseur;
}