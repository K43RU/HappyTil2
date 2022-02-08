import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(  private usuarioService: UsuarioService,
                private router: Router ) { }

  nome = '';
  email = '';

  ngOnInit() {
      this.usuarioService.buscarUsuarios().then(resultado => {console.log('RESULTADO:', resultado);})
      .catch(erro => {console.log('ERRO AO BUSCAR USUARIOS:', erro)});
  }

  entrar(){
    fetch('/api/criar_usuario',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                nome: this.nome, nickname: this.email
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
    this.usuarioService.login(this.nome, this.email).then
    localStorage.setItem('nome', this.nome);
    localStorage.setItem('email', this.email);
    this.router.navigate(['/home/']);
  }

}
