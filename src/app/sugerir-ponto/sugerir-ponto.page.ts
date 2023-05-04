import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugerir-ponto',
  templateUrl: './sugerir-ponto.page.html',
  styleUrls: ['./sugerir-ponto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SugerirPontoPage implements OnInit {

  constructor(private route: Router) { }

  async backPerfil(){
    this.route.navigateByUrl('/tabs/tab3')
  }
  async sugestaoAceita(){
    this.route.navigateByUrl('/sugestao-aceita')
  }

  ngOnInit() {
  }

}
