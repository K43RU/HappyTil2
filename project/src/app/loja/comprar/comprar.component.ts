import { Component, OnInit } from '@angular/core';
import { providerDef } from '@angular/core/src/view';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  constructor() { }

  nome = '';
  preco = '';
  img = undefined;
  img64 = undefined;
  listao = [];

  lista = [{nome: "shampoo", preco: 10}, {nome: "ração", preco: 75}, {nome: "kit brinquedos", preco: 100}]

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
    }).then(function (dados) {
      console.log(dados);
    }).catch(function (erro) {
      console.log(erro)
    })
    alert(this.nome + " está na lista de itens a serem aprovados");
    this.nome = '';
    this.img = '';
    this.preco = '';
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
