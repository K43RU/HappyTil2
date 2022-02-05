import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../checkLogged.canactivate';
import { LojaModule } from '../loja/loja.module'

const routes: Routes = [{
  path: 'home',  canActivate: [CheckLogged], component: MainComponent
}]

import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    LojaModule
  ],
  declarations: [ MainComponent],
  exports: [ MainComponent ],
  providers: [CheckLogged],
  bootstrap: [ AppComponent ]
})
export class HomeModule { }
