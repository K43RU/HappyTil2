import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  lista = [];

  constructor() { }

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
    }).catch((erro) => {
      console.log(erro)
    })
  }

}
