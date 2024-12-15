import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurService } from '../../shared/services/fournisseur/fournisseur.service';
import { Fournisseur } from '../../models/fournisseur';

@Component({
  selector: 'app-page-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class PageFournisseurComponent implements OnInit {

  listFournisseur: Fournisseur[] = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.findAllFournisseurs();
  }

  findAllFournisseurs(): void {
    this.fournisseurService.findAllFournisseurs()
      .subscribe({
        next: (fournisseurs: Fournisseur[]) => this.listFournisseur = fournisseurs,
        error: (err) => this.errorMsg = 'Erreur lors du chargement des fournisseurs'
      });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllFournisseurs();
    } else {
      this.errorMsg = event;
    }
  }
}
