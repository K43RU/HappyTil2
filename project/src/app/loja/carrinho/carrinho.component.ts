import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  lista = [];
  i = 0;
  idProduto = localStorage.getItem('idProduto');
  id_user = localStorage.getItem('IdUser');

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.id_user)
    fetch('/api/buscarCarrinho',
      {
        method: 'POST',
        body: JSON.stringify({
          idUser: this.id_user
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
      this.i = this.lista.length;
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

  remover(item){
    fetch('/api/removerCarrinho',
    {
      method: 'POST',
      body: JSON.stringify({
        ID: item.ID
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
    location.reload();
  }).catch((erro) => {
    console.log(erro)
  })
  }

  comprar(item) {
    this.router.navigate(['/loja/', item.ID_PROD]);
  }

  aaa(){
    this.router.navigate(['/loja/add'])
  }

}
