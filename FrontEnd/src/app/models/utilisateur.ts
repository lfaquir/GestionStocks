import { Adresse } from './adresse';
import { Entreprise } from './entreprise';
import { Role } from './role';
export interface Utilisateur {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  dateDeNaissance?: number;
  moteDePasse?: string;
  adresse?: Adresse;
  photo?: string;
  entreprise?: Entreprise;
  roles?: Array<Role>;
}