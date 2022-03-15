import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private router: Router ) { }

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  img = localStorage.getItem('img');

  ngOnInit() {
  }

  irLoja(){
    this.router.navigate(['/loja/']);
  }

  irPets(){
    this.router.navigate(['/loja/pets'])
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
    document.getElementById('user').style.fontSize = '17px'
    document.getElementById('logout').style.width = '100px'
    document.getElementById('logout').style.height = '50px'
    document.getElementById('logout').style.fontSize = '17px'
    document.getElementById('close').style.height = '30px'
    document.getElementById('close').style.width = '30px'
    document.getElementById('xis').style.width = '100%'
    document.getElementById('xis').style.height = '100%'
    document.getElementById('file-id').style.width = '150px'
    document.getElementById('file-id').style.height = '150px'
    console.log(this.nome, this.email)
    console.log('criado');
  }

  close(){
    document.getElementById('user').style.width = '0'
    document.getElementById('user').style.height = '0'
    document.getElementById('user').style.fontSize = '0'
    document.getElementById('logout').style.width = '0'
    document.getElementById('logout').style.height = '0'
    document.getElementById('logout').style.fontSize = '0'
    document.getElementById('close').style.height = '0'
    document.getElementById('close').style.width = '0'
    document.getElementById('xis').style.width = '0'
    document.getElementById('xis').style.height = '0'
    document.getElementById('file-id').style.width = '0'
    document.getElementById('file-id').style.height = '0'
  }

  logout(){
    localStorage.removeItem('nome');
    localStorage.removeItem('senha');
    this.router.navigate(['/'])
  }

}

