import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvelUtilisateur.component.html',
  styleUrls: ['./nouvelUtilisateur.component.css']
})
export class NouvelUtilisateurComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['utilisateurs']);
  }
}