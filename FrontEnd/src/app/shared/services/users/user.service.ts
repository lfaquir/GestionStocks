import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentification';
import { AuthenticationRequest } from '../../../models/authentificationRequest';
import {Observable, of} from 'rxjs';
import { AuthenticationResponse } from '../../../models/authenticationResponse';
import {Router} from '@angular/router';
import { UtilisateursService } from './utilisateur.service';
import { Utilisateur } from '../../../models/utilisateur';
import {retry} from 'rxjs/operators';
import { changeMotsDePasseUtilisateur } from '../../../models/changeMotsDePasseUtilisateur';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private utilisateurService: UtilisateursService,
    private router: Router
  ) { }


  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.authenticationService.authenticate(authenticationRequest);
  }

  getUserByEmail(email?: string): Observable<Utilisateur> {
    if (email !== undefined) {
      return this.utilisateurService.findByEmail(email);
    }
    return of();
  }

  setAccessToken(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
  }

  setConnectedUser(utilisateur: Utilisateur): void {
    localStorage.setItem('connectedUser', JSON.stringify(utilisateur));
  }

  getConnectedUser(): Utilisateur {
    if (localStorage.getItem('connectedUser')) {
      return JSON.parse(localStorage.getItem('connectedUser') as string);
    }
    return {};
  }

  changerMotDePasse(changeMotsDePasseUtilisateur: changeMotsDePasseUtilisateur): Observable<changeMotsDePasseUtilisateur> {
    return this.utilisateurService.changerMotDePasse(changeMotsDePasseUtilisateur);
  }

  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}