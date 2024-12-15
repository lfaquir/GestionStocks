import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurService } from '../../shared/services/fournisseur/fournisseur.service';
import { Fournisseur } from '../../models/fournisseur';

@Component({
  selector: 'app-detail-fournisseur',
  templateUrl: './detailFournisseur.component.html',
  styleUrls: ['./detailFournisseur.component.css']
})
export class DetailFournisseurComponent implements OnInit {

  @Input()
  origin = ''; // Peut être 'fournisseur' ou 'client', etc.
  @Input()
  Fournisseur: Fournisseur | any = {}; // Utilisez une interface définie si possible
  @Output()
  suppressionResult = new EventEmitter<string>();

  constructor(
    private router: Router,
    private fournisseurService: FournisseurService
  ) {}

  ngOnInit(): void {}

  // Redirige vers la page de modification du fournisseur
  modifierFournisseur(): void {
    this.router.navigate(['nouveaufournisseur', this.Fournisseur.id]);
  }

  // Confirme et supprime le fournisseur
  confirmerEtSupprimer(): void {
    if (this.origin === 'fournisseur') {
      this.fournisseurService.deleteFournisseur(this.Fournisseur.id).subscribe(
        () => {
          // Suppression réussie
          this.suppressionResult.emit('success');
        },
        (error: { error: { message: string; }; }) => {
          // Gestion de l'erreur avec vérification de la structure de l'objet
          const errorMessage = error?.error?.message || 'Une erreur inconnue est survenue.';
          this.suppressionResult.emit(errorMessage);
        }
      );
    } else if (this.origin === 'fournisseur') {
      this.fournisseurService.deleteFournisseur(this.Fournisseur.id).subscribe(
        () => {
          // Suppression réussie
          this.suppressionResult.emit('success');
        },
        (error: { error: { message: string; }; }) => {
          // Gestion de l'erreur avec vérification de la structure de l'objet
          const errorMessage = error?.error?.message || 'Une erreur inconnue est survenue.';
          this.suppressionResult.emit(errorMessage);
        }
      );
    }
  }
}
