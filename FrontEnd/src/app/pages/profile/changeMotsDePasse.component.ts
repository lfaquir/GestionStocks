import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { changeMotsDePasseUtilisateur } from '../../models/changeMotsDePasseUtilisateur';
import { UserService } from '../../shared/services/users/user.service';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changePW.component.html',
  styleUrls: ['./changerPW.component.scss']
})
export class ChangerMotDePasseComponent implements OnInit {

  changerMotDePasse: changeMotsDePasseUtilisateur = {};
  ancienMotDePasse = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('origin') && localStorage.getItem('origin') === 'inscription') {
      this.ancienMotDePasse = 'som3R@nd0mP@$$word';
      localStorage.removeItem('origin');
    }
  }

  cancel(): void {
    this.router.navigate(['profil']);
  }

  changerMotDePasseUtilisateur(): void {
    this.changerMotDePasse.id = this.userService.getConnectedUser().id;
    this.userService.changerMotDePasse(this.changerMotDePasse)
    .subscribe(data => {
      
      this.router.navigate(['profil']);
    });
  }
}