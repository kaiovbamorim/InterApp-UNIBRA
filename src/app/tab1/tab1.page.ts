import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { url } from 'inspector';


declare var google: any;

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
<<<<<<< HEAD
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Title</h1>' +
        '<div id="bodyContent">' +
        "<p></p>" +
=======
        title: '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
>>>>>>> 3eaea9631d051b09c90660a3bd86f5c2e0db77ee
        "</div>" +
        "</div>"
      },
      {
        position: new google.maps.LatLng(-8.0585985, -34.8789275),
        icon: "./assets/marker.png",
<<<<<<< HEAD
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Title</h1>' +
        '<div id="bodyContent">' +
        "<p></p>" +
=======
        title: '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
>>>>>>> 3eaea9631d051b09c90660a3bd86f5c2e0db77ee
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
