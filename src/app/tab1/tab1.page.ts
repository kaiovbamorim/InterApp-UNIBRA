import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { url } from 'inspector';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { log } from 'console';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule],
})
export class Tab1Page {
  constructor(public http: HttpClient) {
    interface PontoDeColeta {
      position: google.maps.LatLng;
      icon: string;
      title: string;
    }

    const pontosDeColeta: PontoDeColeta[] = [];
  }

  @ViewChild('map')
  mapElement!: ElementRef;
  map!: any;
  data: any;

  ngOnInit() {
    this.http.get('./assets/database.json').subscribe((res) => {
      this.data = res;
      const pontos = this.data.records;

      interface PontoDeColeta {
        position: google.maps.LatLng;
        icon: string;
        title: string;
      }

      const pontosDeColeta: PontoDeColeta[] = [];

      if (this.data && this.data.records) {
        this.data.records.forEach((record: any) => {
          const pontoDeColeta = {
            position: new google.maps.LatLng(record[6], record[7]),
            icon: './assets/marker.png',
            title: `
        <div><strong>Tipo Residuo</strong>: ${record[1]}</div>
        <div><strong>Bairro</strong>: ${record[2]}</div>
        <div><strong>Endereco</strong>: ${record[3]}, ${record[4]}</div>
        <div><strong>Observacao</strong>: ${record[5]}</div>
      `,
          };
          pontosDeColeta.push(pontoDeColeta);
        });
      }

      const centralizacao = { lat: -8.0555338, lng: -34.8888516 };

      // The map, centered at Uluru
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 13,
          center: centralizacao,
        }
      );

      const infoWindow = new google.maps.InfoWindow();
      // The marker, positioned at Uluru
      for (let i = 0; i < pontosDeColeta.length; i++) {
        const marker = new google.maps.Marker({
          position: pontosDeColeta[i].position,
          icon: pontosDeColeta[i].icon,
          title: pontosDeColeta[i].title,
          map: map,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener('click', (domEvent: any) => {
          const { target } = domEvent;
          infoWindow.close();
          infoWindow.setContent(marker.title);
          infoWindow.open(marker.map, marker);
        });
      }
    });
  }
}
