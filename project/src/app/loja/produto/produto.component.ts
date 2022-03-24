import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { prependOnceListener } from 'process';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  quantidade = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10];
  qtd = 1;
  idProduto = '';
  lista = [];
  lista2 = [];
  idUser = localStorage.getItem('IdUser');
  
  

  nomeProd = localStorage.getItem('nomeProd');
  constructor(private route: ActivatedRoute,
              private router: Router) {
  this.idProduto = route.snapshot.paramMap.get('id');
  }

  add() {

    fetch('/api/adicionarCarrinho',
      {
        method: 'POST',
        body: JSON.stringify({
          id: this.idProduto, nome: this.nome, preco: this.preco, img: this.img, id_user: this.idUser
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

  nome = '';
  img = undefined;
  preco = '';

  ngOnInit() {

    fetch('/api/buscar_produt',
      {
        method: 'POST',
        body: JSON.stringify({
          id: this.idProduto
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
      this.lista2 = dados.list;
    }).catch((erro) => {
      console.log(erro)
    })

    fetch('/api/buscar_produtao',
      {
        method: 'POST',
        body: JSON.stringify({
          id: this.idProduto
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
      this.nome = dados.NOME;
      this.img = dados.IMG;
      this.preco = dados.PRECO;
    }).catch((erro) => {
      console.log(erro)
    })

  }


  comprar(item) {
    this.router.navigate(['/loja/', item.ID]);
    window.setTimeout(function() {
      location.reload();
  }, 100);
  }

}
