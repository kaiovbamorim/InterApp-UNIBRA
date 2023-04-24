import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { url } from 'inspector';


declare var google: any;

const dados = require('./assets/database.json');

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {

  constructor() {}

  @ViewChild('map')
  mapElement!: ElementRef;
  map!: any;

  ngAfterViewInit() {
    console.log(dados);

    const pontosDeColeta = [
      {
        position: new google.maps.LatLng(-8.079229, -34.904414),
        icon: "./assets/marker.png",
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Title</h1>' +
        '<div id="bodyContent">' +
        "<p></p>" +
        "</div>" +
        "</div>"
      },
      {
        position: new google.maps.LatLng(-8.066962, -34.885139),
        icon: "./assets/marker.png",
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Title</h1>' +
        '<div id="bodyContent">' +
        "<p></p>" +
        "</div>" +
        "</div>"
      },
      {
        position: new google.maps.LatLng(-8.0540768, -34.8936058),
        icon: "./assets/marker.png",
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Title</h1>' +
        '<div id="bodyContent">' +
        "<p></p>" +
        "</div>" +
        "</div>"
      },
      {
        position: new google.maps.LatLng(-8.0585985, -34.8789275),
        icon: "./assets/marker.png",
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Title</h1>' +
        '<div id="bodyContent">' +
        "<p></p>" +
        "</div>" +
        "</div>"
      }
    ]


    const centralizacao = {lat: -8.0555338, lng: -34.8888516};

    // The map, centered at Uluru
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
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


  }

}
