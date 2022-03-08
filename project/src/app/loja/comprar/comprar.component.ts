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
  img = '';
  listao = [];

  lista = [{nome: "shampoo", preco: 10}, {nome: "ração", preco: 75}, {nome: "kit brinquedos", preco: 100}]

  cadastroProduto() {
    fetch('/api/cadastroProd',
      {
        method: 'POST',
        body: JSON.stringify ({
          nome: this.nome, preco: this.preco
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

  ngOnInit() {
      fetch('/api/buscar_prod',
        {
          method: 'POST',
          body: JSON.stringify ({
            nome: this.nome, preco: this.preco, img: this.img
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(function (result) {
        return result.json();
      }).then(function (dados) {
        console.log(dados);
        this.lista = dados.list
      }).catch(function (erro) {
        console.log(erro)
      })
  }

}
