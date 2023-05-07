import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  email: string = '';
  senha: string = '';


  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  public togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = "text"
    }
  }

  login(){
    if(this.email === '' && this.senha === ''){
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('top', 'Seja Bem Vindo!', 'success')
    } else {
      this.presentToast('top', 'E-mail ou senha incorretos!', 'danger')
    }
  }

  register(){
    this.route.navigateByUrl('/register')
  }
  newPassword(){
    this.route.navigateByUrl('/new-password')
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
