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
          id_prod: this.idProduto, id_user: this.idUser
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
      this.router.navigate(['/loja/carrinho'])
    }).catch((erro) => {
      console.log(erro)
    })

  }

  nome = '';
  img = undefined;
  preco = '';

  ngOnInit() {
    console.log(this.idUser);
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

  remover(){
    fetch('/api/removerProduto',
      {
        method: 'POST',
        body: JSON.stringify({
          ID: this.idProduto
        })
        ,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((result) => {
      return result.json();
    }).then((dados) => {
      this.router.navigate(['/loja/'])
    }).catch((erro) => {
      console.log(erro)
    })
  }

  irLoja(){
    this.router.navigate(['/loja/']);
  }

  irHome(){
    this.router.navigate(['/home/']);
  }

  irPets(){
    this.router.navigate(['/loja/pets'])
  }

  irCarrinho(){
    this.router.navigate(['/loja/carrinho']);
  }

  irHorarios(){
    this.router.navigate(['/loja/horarios']);
  }

  comprar(item) {
    this.router.navigate(['/loja/', item.ID]);
    window.setTimeout(function() {
      location.reload();
  }, 100);
  }

}
