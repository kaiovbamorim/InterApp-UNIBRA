import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { url } from 'inspector';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare var google: any;



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule,HttpClientModule],
})
export class Tab1Page {



  constructor(
    public http: HttpClient
  ) {


  }

  @ViewChild('map')
  mapElement!: ElementRef;
  map!: any;
  data:any;


  ngOnInit() {
    this.http.get("./assets/database.json").subscribe(res =>{
    this.data = res;

    console.log(this.data)

    const registro = this.data.records[0];
const bairro = registro[this.data.fields.findIndex(f => f.id === 'bairro')];
console.log(bairro);
    const pontosDeColeta = [
      {
        position: new google.maps.LatLng(-8.079229, -34.904414),
        icon: "./assets/marker.png",
        title:`
        <div><div><strong>_id</strong>${this.data.records.id}</div>
        <div><strong>tiporesiduo</strong>: Materiais Recicláveis</div><div><strong>bairro</strong>: Soledade</div>
        <div><strong>endereco</strong>: R. João Fernandes Viêira, 160 - Soledade, Recife</div>
        <div><strong>complemento</strong>: </div>
        <div><strong>observacao</strong>: PEV</div>
        <div><strong>latitude</strong>: -8.054543</div>
        <div><strong>longitude</strong>: -34.89133</div></div>`
      },
      {
        position: new google.maps.LatLng(-8.066962, -34.885139),
        icon: "./assets/marker.png",
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<div id="bodyContent">' +
        "<p>id:78 <br>" +
        "tiporesiduo: metal, isopor, papel, plastico, vidro <br>" +
        "bairro: Santo Antônio <br>" +
        "endereço: Avenida Dantas Barreto <br>" +
        "complemento: Calçada da Praça da Independência <br>" +
        "observação: Ecoponto <br>" +
        "latitude: -8 066962 <br>" +
        "longitude: -34.885139 <br>" +
        "</p>" +
        "</div>"
      },
      {
        position: new google.maps.LatLng(-8.0540768, -34.8936058),
        icon: "./assets/marker.png",
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<div id="bodyContent">' +
        "<p>id:78 <br>" +
        "tiporesiduo: metal, isopor, papel, plastico, vidro <br>" +
        "bairro: Santo Antônio <br>" +
        "endereço: Avenida Dantas Barreto <br>" +
        "complemento: Calçada da Praça da Independência <br>" +
        "observação: Ecoponto <br>" +
        "latitude: -8.0540768 <br>" +
        "longitude: -34.8936058 <br>" +
        "</p>" +
        "</div>"
      },
      {
        position: new google.maps.LatLng(-8.0585985, -34.8789275),
        icon: "./assets/marker.png",
        title:  '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<div id="bodyContent">' +
        "<p>id:78 <br>" +
        "tiporesiduo: metal, isopor, papel, plastico, vidro <br>" +
        "bairro: Santo Antônio <br>" +
        "endereço: Avenida Dantas Barreto <br>" +
        "complemento: Calçada da Praça da Independência <br>" +
        "observação: Ecoponto <br>" +
        "latitude: -8.0585985 <br>" +
        "longitude: -34.8789275 <br>" +
        "</p>" +
        "</div>"
      },
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

  })
}

}
