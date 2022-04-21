import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor( private router: Router ) { }

  nome = '';
  preco = '';
  img = undefined;
  img64 = undefined;
  lista = [];
  id = localStorage.getItem('IdUser');

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
  
  irLoja(){
    this.router.navigate(['/loja/']);
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

  cadastroProduto() {
    fetch('/api/cadastroProd',
      {
        method: 'POST',
        body: JSON.stringify({
          nome: this.nome, preco: this.preco, img: this.img64, id: this.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((result) => {
      return result.json();
    }).then((dados) => {
      alert(this.nome + " está na lista de itens a serem aprovados");
      console.log(dados);
    }).catch((erro) => {
      console.log(erro)
    })
    this.nome = '';
    this.img = '';
    this.preco = '';
    location.reload();
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
