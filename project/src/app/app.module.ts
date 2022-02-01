import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import CheckLogged from './checkLogged.canactivate';
import { HomeModule } from './home/home.module'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: CadastroComponent, canActivate: []
      }
    ]),
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HomeModule
  ],
  providers: [ CheckLogged ],
  bootstrap: [AppComponent]
})
export class AppModule { }
