import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
    <h2>Bem vindo ao curso de {{curso}}</h2>
    <h2>Operação matemática: {{3*4}}</h2>
    <h2>Texto dentro da interpolação: {{"Bem vindo " + nome}}</h2>
    <h2>Método length: {{nome.length}}</h2>
    <h2>Métoto toUpperCase(): {{nome.toUpperCase()}} </h2>
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public curso = ".NET C#"
  public nome = "Jonatas"
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

}
