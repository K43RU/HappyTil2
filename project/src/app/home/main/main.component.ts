import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  irLoja(){
    this.router.navigate(['/loja/']);
  }

  irCarrinho(){
    this.router.navigate(['/loja/carrinho']);
  }

  irHorarios(){
    this.router.navigate(['/loja/horarios']);
  }

  deslogar(){
    this.router.navigate(['']);
    localStorage.removeItem('nome');
  }

  

  abrirConfig(){
    let user = document.createElement('div');
    user.className = 'user';
    document.body.appendChild(user);
    console.log('oi');
  }

}
