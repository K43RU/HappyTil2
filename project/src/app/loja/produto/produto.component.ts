import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idProduto = '';
  lista = [];
  idUser = localStorage.getItem('IdUser');

  nomeProd = localStorage.getItem('nomeProd');

  constructor(private route: ActivatedRoute) {
    this.idProduto = route.snapshot.paramMap.get('id');
  }

  add() {
    fetch('/api/adicionar_carrinho',
      {
        method: 'POST',
        body: JSON.stringify({
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

  ngOnInit() {

    fetch('/api/buscar_produtao',
      {
        method: 'POST',
        body: JSON.stringify({
          nome: this.idProduto
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
