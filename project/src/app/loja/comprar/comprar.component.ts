import { Component, OnInit } from '@angular/core';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { providerDef } from '@angular/core/src/view';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor( private router: Router ) { }

  nome = '';
  preco = '';
  img = undefined;
  img64 = undefined;
  lista = [];

  cadastroProduto() {
    fetch('/api/cadastroProd',
      {
        method: 'POST',
        body: JSON.stringify ({
          nome: this.nome, preco: this.preco, img: this.img64
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then(function setTim(dados) {
      alert(this.nome + " está na lista de itens a serem aprovados");
      console.log(dados);
    }).catch(function (erro) {
      console.log(erro)
    })
    this.nome = '';
    this.img = '';
    this.preco = '';
    this.router.navigate(['//'])
  }

  mudanca(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.img64 = reader.result;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  ngOnInit() {
    fetch('/api/buscar_prod',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then((result) => {
    return result.json();
}).then((dados) => {
    console.log(dados);
    this.lista = dados.list;
}).catch((erro) => {
    console.log(erro)
})
  }
}
