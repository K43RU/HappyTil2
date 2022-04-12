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

  constructor(private router: Router) { }

  id = localStorage.getItem('IdUser');

  nome = '';
  preco = '';
  img = undefined;
  img64 = undefined;
  lista = [];
  i = 0;

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
      if(this.lista.length != 0){
        this.i++;
      }
    }).catch((erro) => {
      console.log(erro)
    })
  }

  comprar(item) {
    this.router.navigate(['/loja/', item.ID]);
  }

  aaa(){
    this.router.navigate(['/loja/add'])
  }

}

