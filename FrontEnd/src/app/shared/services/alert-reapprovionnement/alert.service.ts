import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from '../../../models/produit';
import { Alert } from '../../../models/alert';
import { ProduitService } from '../produit/produit.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private apiUrl = 'http://localhost:3000/alertes';

  constructor(
    private produitService: ProduitService,
    private http: HttpClient  
  ) {}

  // Génère des alertes pour les produits ayant un stock faible
  getAlerts(): Observable<Alert[]> {
    return this.produitService.getProduits().pipe(
      map((produits: Produit[]) =>
        produits
          .filter(produit => produit.stockActuel <= (produit.seuilReapprovisionnement || 0)) // Filtrer les produits à stock faible
          .map(produit => ({
            produitId: produit.Id?.toString() || '', // Conversion pour correspondre au modèle Alert
            message: `Stock faible pour le produit ${produit.description}`,
            stockActuel: produit.stockActuel,
            seuilReapprovisionnement: produit.seuilReapprovisionnement
          }))
      )
    );
  }

  // Méthode pour envoyer des alertes (si nécessaire)
  envoyerAlertes(alertes: Alert[]): Observable<any> {
    return this.http.post(this.apiUrl, alertes);  // Envoi d'une requête POST pour sauvegarder les alertes
  }
}


