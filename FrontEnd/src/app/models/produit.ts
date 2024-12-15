export interface Produit {
    Id?: number,
    idEntreprise?: number;
    prixUnitaireHt?: number;
    tauxTva?: number;
    prixUnitaireTtc?: number;
    photo?: string;
    description?: string;
    stockActuel: number;       // Quantité actuelle en stock
    seuilReapprovisionnement?: number;
}
  