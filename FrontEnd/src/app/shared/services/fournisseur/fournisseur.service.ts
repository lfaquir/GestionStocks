import { Injectable } from '@angular/core';
import { UserService } from '../users/user.service';
import { Observable, of } from 'rxjs';
import { Fournisseur } from '../../../models/fournisseur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private baseUrl = 'localhost:3000';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  enregistrerFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    fournisseur.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
    return this.http.post<Fournisseur>(`${this.baseUrl}`, fournisseur);
  }

  findAllFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.baseUrl}`);
  }

  findFournisseurById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.baseUrl}/${id}`);
  }

  deleteFournisseur(idFournisseur: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idFournisseur}`);
  }
}

