import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './prop-binding/teste.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DiretivasComponent } from './diretiva-ngIf/diretivas.component';
import { DiretivangForComponent } from './diretiva-ngFor/diretivang-for.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    TwoWayComponent,
    HelloWorldComponent,
    InterpolationComponent,
    DiretivasComponent,
    DiretivangForComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
