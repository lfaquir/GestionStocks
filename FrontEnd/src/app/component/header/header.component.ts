import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/users/user.service';
import { Utilisateur } from '../../models/utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  connectedUser: Utilisateur = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.connectedUser = this.userService.getConnectedUser();
  }

}
