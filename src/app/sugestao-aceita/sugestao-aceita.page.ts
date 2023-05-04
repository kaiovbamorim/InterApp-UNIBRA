import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sugestao-aceita',
  templateUrl: './sugestao-aceita.page.html',
  styleUrls: ['./sugestao-aceita.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SugestaoAceitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
