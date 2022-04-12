import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import CheckLogged from './checkLogged.canactivate';
import { HomeModule } from './home/home.module';
import { RegistroComponent } from './registro/registro.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login-v2";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("402231336047-9jsgeagvcoa8fqb6eled83fj2hnodt5d.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    RegistroComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: CadastroComponent, canActivate: [] },
      { path: 'registro', component: RegistroComponent }
    ]),
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    HomeModule,
    SocialLoginModule
  ],
  providers: [ CheckLogged,
    {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
