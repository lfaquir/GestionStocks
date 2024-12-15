import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/login/login.component';
import { PageInscriptionComponent } from './pages/inscription/inscription.component';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './component/menu/menu.component';
import { HeaderComponent } from './component/header/header.component';
import { PageProduitComponent } from './pages/produit/produit.component';
import { DetailProduitComponent } from './component/detailsProduit/detailProduit.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { BouttonActionComponent } from './component/boutonAction/boutonAction.component';
import { PageMvtstkComponent } from './pages/mvt-stocks/mvtStocks.component';
import { DetailMvtStkComponent } from './component/detailsMvtStocks/detailMvtStocks.component';
import { PageFournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { PageUtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvelUtilisateur.component';
import { PageProfilComponent } from './pages/profile/profile.component';
import { ChangerMotDePasseComponent } from './pages/profile/changeMotsDePasse.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HttpInterceptorService } from './shared/services/interceptor/http-interceptor.service';
import { LoaderComponent } from './component/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    //DashboardComponent,
    //PageStatistiquesComponent,
    PageProduitComponent,
    DetailProduitComponent,
    MenuComponent,
    HeaderComponent,
    PaginationComponent,
    BouttonActionComponent,
    PageMvtstkComponent,
    DetailMvtStkComponent,
    PageFournisseurComponent,
    PageUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }