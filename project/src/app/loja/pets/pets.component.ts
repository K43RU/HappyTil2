import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  lista = [];
  nome = '';
  img = undefined;
  img64 = undefined;

  constructor( private router: Router ) { }

  home(){
    this.router.navigate(['/home/']);
  }

  irLoja(){
    this.router.navigate(['/loja/']);
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

  mostrar() {
    fetch('/api/mostrar_pet',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            pet: this.nome, img: this.img64
          }
        ),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(function (result) {
      return result.json();
    }).then((dados) => {
      location.reload();
      console.log(dados);
    }).catch((erro) => {
      location.reload();
      console.log(erro)
    })
  }

  ngOnInit() {
    fetch('/api/buscar_pet',
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

}
