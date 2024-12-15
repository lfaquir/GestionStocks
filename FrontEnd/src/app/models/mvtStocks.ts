import { Produit } from "./produit";

export interface MvtStoks {
  id?: number;
  produitId: number; 
  dateMvt?: Date;
  quantite?: number;
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
  idEntreprise?: number;
  responsable?: string;
}