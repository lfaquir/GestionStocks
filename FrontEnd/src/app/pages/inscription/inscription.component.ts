import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../../models/entreprise';
import { EntrepriseService } from '../../shared/services/entreprise/entreprise.service';
import { Adresse } from '../../models/adresse';
import { UserService } from '../../shared/services/users/user.service';
import { AuthenticationRequest } from '../../models/authentificationRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  entrepriseDto: Entreprise = {};
  adresse: Adresse = {};
  errorsMsg: Array<string> = [];

  constructor(
    private entrepriseService: EntrepriseService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  inscrire(): void {
    this.entrepriseDto.adresse = this.adresse;
    this.entrepriseService.sinscrire(this.entrepriseDto)
    .subscribe(entreprise => {
      this.connectEntreprise();
    }, error => {
      this.errorsMsg = error.error.errors;
      });
  }

  connectEntreprise(): void {
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      password: 'som3R@nd0mP@$$word'
    };
    this.userService.login(authenticationRequest)
    .subscribe(response => {
      this.userService.setAccessToken(response);
      this.getUserByEmail(authenticationRequest.login);
      localStorage.setItem('origin', 'inscription');
      this.router.navigate(['changermotdepasse']);
    });
  }

  getUserByEmail(email?: string): void {
    this.userService.getUserByEmail(email)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }
}