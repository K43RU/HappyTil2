import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor( private router: Router ) { }

  nome = '';
  email = '';
  senha = '';

  ngOnInit() {
  }

  entrar(){
    fetch('/api/criar_usuario',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                nome: this.nome, email: this.email, password: this.senha
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then(function (result){
    return result.json();
}).then(function (dados){
    console.log(dados);
}).catch(function(erro){
    console.log(erro)
})
if(this.nome != '' && this.email != '' && this.senha != ''){
    this.router.navigate(['//'])
  }
}

  registro(){
    this.router.navigate(['//'])
  }

}