import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../baseService';
import { ApiConfiguration } from '../apiConfiguration';
import { StrictHttpResponse } from '../strictHttpResponse';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Utilisateur } from '../../../models/utilisateur';
import { changeMotsDePasseUtilisateur } from '../../../models/changeMotsDePasseUtilisateur';
@Injectable({
  providedIn: 'root',
})
class UtilisateursService extends BaseService {
  static readonly findAllPath = '/gestiondestock/v1/utilisateurs/all';
  static readonly savePath = '/gestiondestock/v1/utilisateurs/create';
  static readonly deletePath = '/gestiondestock/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly findByEmailPath = '/gestiondestock/v1/utilisateurs/find/{email}';
  static readonly changerMotDePassePath = '/gestiondestock/v1/utilisateurs/update/password';
  static readonly findByIdPath = '/gestiondestock/v1/utilisateurs/{idUtilisateur}';

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<StrictHttpResponse<Array<Utilisateur>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Array<Utilisateur>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<Utilisateur>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<Utilisateur>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: Utilisateur): __Observable<StrictHttpResponse<Utilisateur>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Utilisateur>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: Utilisateur): __Observable<Utilisateur> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as Utilisateur)
    );
  }

  /**
   * @param idUtilisateur undefined
   */
  deleteResponse(idUtilisateur: number): __Observable<StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/delete/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idUtilisateur undefined
   */
  delete(idUtilisateur: number): __Observable<null> {
    return this.deleteResponse(idUtilisateur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param email undefined
   * @return successful operation
   */
  findByEmailResponse(email: string): __Observable<StrictHttpResponse<Utilisateur>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/find/${email}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Utilisateur>;
      })
    );
  }
  /**
   * @param email undefined
   * @return successful operation
   */
  findByEmail(email: string): __Observable<Utilisateur> {
    return this.findByEmailResponse(email).pipe(
      __map(_r => _r.body as Utilisateur)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  changerMotDePasseResponse(body?: changeMotsDePasseUtilisateur): __Observable<StrictHttpResponse<Utilisateur>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/update/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Utilisateur>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  changerMotDePasse(body?: changeMotsDePasseUtilisateur): __Observable<Utilisateur> {
    return this.changerMotDePasseResponse(body).pipe(
      __map(_r => _r.body as Utilisateur)
    );
  }

  /**
   * @param idUtilisateur undefined
   * @return successful operation
   */
  findByIdResponse(idUtilisateur: number): __Observable<StrictHttpResponse<Utilisateur>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/utilisateurs/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Utilisateur>;
      })
    );
  }
  /**
   * @param idUtilisateur undefined
   * @return successful operation
   */
  findById(idUtilisateur: number): __Observable<Utilisateur> {
    return this.findByIdResponse(idUtilisateur).pipe(
      __map(_r => _r.body as Utilisateur)
    );
  }
}

module UtilisateursService {
}

export { UtilisateursService }