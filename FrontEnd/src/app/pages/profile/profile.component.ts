import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class PageProfilComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  modifierMotDePasse(): void {
    this.router.navigate(['changermotdepasse']);
  }
}
