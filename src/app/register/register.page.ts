import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  nomeCompleto: string = '';
  email: string = '';
  senha: string = '';

  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  public togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = "text"
    }
  }

  backLogin() {
    this.route.navigateByUrl('/login');
  }

  async registre() {



    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\w\W]{8,128}$/;
    if (!emailRegex.test(this.email)) {
      this.presentToast('top', 'E-mail ou senha inválido!', 'danger');
      return;
    }
    else if (!passwordRegex.test(this.senha)) {
      this.presentToast('top', 'Senha inválido!', 'danger');
    }

    else if ((this.nomeCompleto && this.email && this.senha).trim() === '') {
      this.presentToast('top', 'Preencha todos os campos!', 'danger');
    } else {
      this.presentToast('top', 'Conta criada com sucesso!', 'success');
      this.route.navigateByUrl('/login');
    }
    // if ((this.nomeCompleto && this.email && this.senha) != '') {
    //   this.presentToast('top', 'Conta criada com sucesso!', 'success');
    //   this.route.navigateByUrl('/login');
    // } else {
    //   this.presentToast('top', 'Preencha todos os campos!', 'danger');
    // }
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
