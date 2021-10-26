import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  template: `
  <h2>Bem Vindo {{nome}}</h2>
  <!-- <img src="{{itemImageUrl}}" alt=""> -->
 <!--  <img [src]="itemImageUrl" alt=""> -->
  <br>
  <input disabled id={{myId}} type="text" value="Jonatas">

  <input [disabled]="isDisabled" [id]="myId" type="text" value="Lorem"><!-- quando se usa o property binding [] vc consegue fazer mudanças -->
  <input bind-disabled="isDisabled" [id]="myId" type="text" value="Lorem">
  <hr>
  <h2 [class]="succesClass"> Testo com Sucesso</h2>
  `,
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  public nome = "Jonatas"
  public itemImageUrl = "../assets/img/180710-China-iStock-860594926.jpg"
  public myId = "Meu Id"
  public isDisabled = false
  public succesClass = "text-danger"
  constructor() { }

  ngOnInit(): void {
  }

}
