import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PageUtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvelUtilisateur.component';
import { PageLoginComponent } from './pages/login/login.component';
import { PageInscriptionComponent } from './pages/inscription/inscription.component';
//import {PageStatistiquesComponent} from './pages/page-statistiques/page-statistiques.component';
import { PageProduitComponent } from './pages/produit/produit.component';
import { PageMvtstkComponent } from './pages/mvt-stocks/mvtStocks.component';
import { PageFournisseurComponent } from './pages/fournisseur/fournisseur.component';
import { PageProfilComponent } from './pages/profile/profile.component';
import { ChangerMotDePasseComponent } from './pages/profile/changeMotsDePasse.component';
import { ApplicationGuardService } from './shared/services/guard/guard.service';




export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard', component: DashboardComponent },
  //{ path: 'users', component: UsersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: PageLoginComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  //{path: '', component: UsersComponent,},
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [ApplicationGuardService],
    children: [
      {
        path: 'statistiques',
        //component: PageStatistiquesComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'produit',
        component: PageProduitComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'mvtStocks',
        component: PageMvtstkComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [ApplicationGuardService]
      },
      {
        path: 'changermotdepasse',
        component: ChangerMotDePasseComponent,
        canActivate: [ApplicationGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
