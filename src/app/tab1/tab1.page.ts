import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {

  // @ViewChild('map')
  // mapElement!: ElementRef;
  // map!: any;

  // @ViewChild('map')
  // mapRef: ElementRef<HTMLElement>;
  // newMap: GoogleMap;

  // async createMap() {
  //   this.newMap = await GoogleMap.create({
  //     id: 'my-cool-map',
  //     element: this.mapRef.nativeElement,
  //     apiKey: environment.apiKey,
  //     config: {
  //       center: {
  //         lat: 33.6,
  //         lng: -117.9,
  //       },
  //       zoom: 8,
  //     },
  //   });
  // }
}
