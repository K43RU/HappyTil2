import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  constructor( private router: Router ) { }

  pet = '';
  especie = '';
  data = undefined;
  hora = undefined;
  i = 0;
  lista = [];

  home(){
    this.router.navigate(['/home/']);
  }

  irLoja(){
    this.router.navigate(['/loja/']);
  }

  aaa(){
    this.router.navigate(['/loja/marcar']);
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
    fetch('/api/buscar_horario',
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
    this.i = this.lista.length;
}).catch((erro) => {
    console.log(erro)
})
  }

}
