import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from '../../models/produit';
import { Router } from '@angular/router';
import { ProduitService } from '../../shared/services/produit/produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detailProduit.component.html',
  styleUrls: ['./detailProduit.component.css']
})
export class DetailProduitComponent implements OnInit {

  @Input()
  produit: Produit | null = null; 
  @Output()
  suppressionResult = new EventEmitter<string>();

  constructor(
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit(): void {}

  // Méthode pour rediriger vers la modification d'un article
  modifierArticle(): void {
    if (this.produit?.Id) {
      this.router.navigate(['nouvelarticle', this.produit.Id]);
    }
  }

  // Méthode pour confirmer et supprimer un article
  confirmerEtSupprimerArticle(): void {
    if (!this.produit?.Id) {
      this.suppressionResult.emit('ID produit manquant.');
      return;
    }

    this.produitService.delete(this.produit.Id).subscribe(
      () => {
        // Suppression réussie
        this.suppressionResult.emit('success');
      },
      (error: { error: { message: string; }; }) => {
        // Gestion des erreurs avec une vérification de structure
        const errorMessage = error?.error?.message || 'Erreur lors de la suppression.';
        this.suppressionResult.emit(errorMessage);
      }
    );
  }
}
