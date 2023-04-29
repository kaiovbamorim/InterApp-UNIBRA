import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab3Page {
  constructor(
    private route: Router,
    private actionSheetCtrl: ActionSheetController
  ) {}

  
  async sugerirPonto(){
    this.route.navigate(['/sugerir-ponto'])
  }
  async alterarSenha(){
    this.route.navigate(['/alterar-senha'])
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Deseja desconectar de EccoPonto?',
      buttons: [
        {
          text: 'Sim',
          role: 'destructive',
          handler: () => {
            this.logout();
          },
        },
        {
          text: 'Não',
          role: 'Não',
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }
  logout() {
    this.route.navigateByUrl('/login');
  }
}
