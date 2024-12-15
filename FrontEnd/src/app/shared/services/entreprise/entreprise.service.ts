import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from '../../../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private apiUrl = 'http://localhost:3000/entreprise';

  constructor(private http: HttpClient) { }

  // Méthode pour inscrire une entreprise
  sinscrire(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.apiUrl, entreprise);
  }
}
