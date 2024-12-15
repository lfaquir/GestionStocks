import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../shared/services/produit/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class PageProduitComponent implements OnInit {
  produits: Produit[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  // Charger tous les produits
  loadProduits(): void {
    this.isLoading = true;
    this.produitService.getProduits().subscribe(
      (data: Produit[]) => {
        this.produits = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des produits.';
        console.error('Erreur :', error);
        this.isLoading = false;
      }
    );
  }

  // Supprimer un produit
  supprimerProduit(idProduit?: number): void {
    if (!idProduit) return;
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.delete(idProduit).subscribe(
        () => this.loadProduits(),
        (error) => {
          this.errorMessage = 'Erreur lors de la suppression du produit.';
          console.error('Erreur :', error);
        }
      );
    }
  }

  // Naviguer vers le formulaire d'ajout ou de modification
  modifierProduit(idProduit?: number): void {
    // Logique pour naviguer (par exemple, utiliser le router Angular)
    console.log(`Naviguer vers le formulaire pour le produit ID: ${idProduit}`);
  }

  // Naviguer vers le formulaire pour ajouter un nouveau produit
  ajouterProduit(): void {
    console.log('Naviguer vers le formulaire pour ajouter un nouveau produit');
  }
}
