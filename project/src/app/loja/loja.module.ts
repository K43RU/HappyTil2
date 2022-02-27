import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprarComponent } from './comprar/comprar.component';
import { HorariosComponent } from './horarios/horarios.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../checkLogged.canactivate';

const routes: Routes = [{
  path: 'loja', canActivate: [CheckLogged],children: [
    {path: '', component: ComprarComponent},
    {path: 'carrinho', component: CarrinhoComponent},
    {path: 'horarios', component: HorariosComponent}
  ]
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ComprarComponent, HorariosComponent, CarrinhoComponent],
  exports: [ ComprarComponent, HorariosComponent, CarrinhoComponent ]
})

export class LojaModule { }
