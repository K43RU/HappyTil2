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
  email = '';

  ngOnInit() {
  }

  entrar(){
    localStorage.setItem('nome', this.nome);
    localStorage.setItem('email', this.email);
    this.router.navigate(['/home/']);
  }

}
