import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {

  }
}
