import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service'

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    constructor(private usuarioService: UsuarioService,
        private router: Router) { }

    nome = '';
    senha = '';

    ngOnInit() {
        this.usuarioService.buscarUsuarios().then(resultado => { console.log('RESULTADO:', resultado); })
            .catch(erro => { console.log('ERRO AO BUSCAR USUARIOS:', erro) });
            localStorage.removeItem('nome');
            localStorage.removeItem('senha');
    }

    entrar() {
        if (this.nome != '' && this.senha != '') {
            fetch('/api/login',
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            nome: this.nome, password: this.senha
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(function (result) {
                return result.json();
                
            }).then((dados) => {
                console.log(dados.user.EMAIL)
                if(!dados.user.nome){
                
                localStorage.setItem('img', dados.user.IMG);
                localStorage.setItem('email', dados.user.EMAIL);
                this.router.navigate(['/home/']);
                }
                console.log(dados);
            }).catch((erro) => {
                console.log(erro)
            })
        }
        localStorage.setItem('nome', this.nome);
        localStorage.setItem('senha', this.senha);
    }

    registro() {
        this.router.navigate(['/registro/'])
    }

}
