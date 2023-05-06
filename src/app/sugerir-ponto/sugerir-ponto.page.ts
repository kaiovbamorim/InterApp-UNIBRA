import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugerir-ponto',
  templateUrl: './sugerir-ponto.page.html',
  styleUrls: ['./sugerir-ponto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SugerirPontoPage implements OnInit {

  bairro: string = '';
  endereco: string = '';
  longitude: string = '';
  latitude: string = '';

  constructor(private toastController: ToastController,private route: Router) { }

  async backPerfil(){
    this.route.navigateByUrl('/tabs/tab3')
  }
  async sugestaoAceita(){
    if((this.bairro && this.endereco && this.longitude && this.latitude) != '' ){
      this.route.navigateByUrl('/sugestao-aceita')
    } else {
      this.presentToast('top', 'Preencha todos os campos!', 'danger')
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  ngOnInit() {
  }

}
