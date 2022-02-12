import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private router: Router) { }

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  img = localStorage.getItem('img');

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
    document.getElementById('user').style.width = '350px'
    document.getElementById('user').style.height = '80vh'
    console.log(this.nome, this.email)
    console.log('criado');
  }

}

