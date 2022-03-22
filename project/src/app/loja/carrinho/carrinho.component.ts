import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  lista = [];
  idProduto = localStorage.getItem('idProduto');
  id_user = localStorage.getItem('IdUser')

  constructor() { }

  ngOnInit() {
    fetch('/api/buscarCarrinho',
      {
        method: 'POST',
        body: JSON.stringify({
          id: this.idProduto, id_user: this.id_user
        })
        ,
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
