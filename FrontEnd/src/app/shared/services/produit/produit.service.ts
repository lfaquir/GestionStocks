import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';  // Importer HttpClient
import { UserService } from '../users/user.service';
import { Produit } from '../../../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'http://localhost:3000/produits';  // URL de votre API pour les produits

  constructor(
    private http: HttpClient,
    private UsersService: UserService
  ) { }

  // Récupérer tous les produits
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  // Enregistrer un produit
  enregistrerProduit(produit: Produit): Observable<Produit> {
    produit.idEntreprise = this.UsersService.getConnectedUser()?.entreprise?.id;
    return this.http.post<Produit>(this.apiUrl, produit);  
  }

  // Récupérer un produit par son ID
  findById(idProduit: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${idProduit}`);  
  }

  // Supprimer un produit
  delete(idProduit: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${idProduit}`);  
  }

  // Récupérer tous les produits (alias pour getProduits)
  findAll(): Observable<Produit[]> {
    return this.getProduits();
  }
}
