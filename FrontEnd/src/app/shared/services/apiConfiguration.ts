import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://localhost:3000';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}