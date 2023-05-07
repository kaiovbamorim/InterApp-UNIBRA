import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class NewPasswordPage implements OnInit {

  email: string = "";

  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  backLogin() {
    this.route.navigateByUrl('/login')
  }

  async recuperar() {

    if (this.email.trim() === '') {
      this.presentToast('top', 'Preencha todos os campos!', 'danger');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(this.email)) {
      this.presentToast('top', 'E-mail inválido!', 'danger');
      return;
    } else {
      this.presentToast('top', 'Conta criada com sucesso!', 'success');
      this.route.navigateByUrl('/login');
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

}
