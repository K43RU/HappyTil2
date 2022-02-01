import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor( private router: Router ) { }

  nome = '';
  senha = '';

  ngOnInit() {
  }

  entrar(){
    localStorage.setItem('nome', this.nome);
    localStorage.setItem('senha', this.senha);
    this.router.navigate(['/home/']);
  }

}
