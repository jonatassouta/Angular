import { DiretivangForComponent } from './diretiva-ngFor/diretivang-for.component';
import { DiretivasComponent } from './diretiva-ngIf/diretivas.component';
import { TesteComponent } from './prop-binding/teste.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'twoWay', component: TwoWayComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'prop-binding', component: TesteComponent},
  {path: 'diretiva-ngIf', component: DiretivasComponent},
  {path: 'diretiva-ngFor', component: DiretivangForComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
