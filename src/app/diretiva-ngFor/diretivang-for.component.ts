import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivang-for',
  templateUrl: './diretivang-for.component.html',
  styleUrls: ['./diretivang-for.component.css']
})
export class DiretivangForComponent implements OnInit {

  titulo ='Exemplo de Diretva *ngFor';
  games = ['Assasins Creed', 'Uncharted', 'Left for Dead', 'Conter Strike Go'];
  game = this.games[0]
  constructor() { }

  ngOnInit(): void {
  }

}
