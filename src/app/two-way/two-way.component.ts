import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `
    <input [(ngModel)]="nome" type="text"> {{nome}} <!-- Cria dois caminhos, e possibilita por exemplo, conforme vai escrevendo pesquisar no banco de dados de forma estantanea -->
  `,

  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  public nome = "";
  constructor() { }

  ngOnInit(): void {
  }

}
