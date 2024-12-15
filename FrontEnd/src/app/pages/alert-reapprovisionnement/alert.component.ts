import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../shared/services/alert-reapprovionnement/alert.service';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.loadAlerts();
  }

  // Charger les alertes
  loadAlerts(): void {
    this.isLoading = true;
    this.alertService.getAlerts().subscribe(
      (data: Alert[]) => {
        this.alerts = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des alertes.';
        console.error('Erreur :', error);
        this.isLoading = false;
      }
    );
  }

  // Envoi des alertes à l'API (exemple)
  envoyerAlertes(): void {
    this.alertService.envoyerAlertes(this.alerts).subscribe(
      (response) => {
        console.log('Alertes envoyées avec succès', response);
      },
      (error) => {
        this.errorMessage = 'Erreur lors de l\'envoi des alertes.';
        console.error('Erreur :', error);
      }
    );
  }
}


