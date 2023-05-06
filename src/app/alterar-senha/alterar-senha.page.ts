import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlterarSenhaPage implements OnInit {

  senhaAtual: string = '';
  senha1: string = '';
  senha2: string = '';

  constructor(private toastController: ToastController, private route: Router) { }

  async backPerfil() {
    this.route.navigateByUrl('/tabs/tab3')
  }

  async alterarSenha() {
    if (this.senha1 == this.senha2 && this.senhaAtual != '' && this.senhaAtual == 'admin') {
      this.presentToast('top', 'Senha alterada com sucesso!', 'success')
      this.route.navigateByUrl('/tabs/tab1')
    } else {
      this.presentToast('top', 'Senhas não coincidem!', 'danger')
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
