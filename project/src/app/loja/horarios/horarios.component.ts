import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  constructor() { }

  pet = '';
  especie = '';
  data = undefined;
  hora = undefined;

  lista = [];

  marcar(){
    console.log(this.pet);
    
    fetch('/api/marcar_horario',
    {
        method: 'POST',
        body: JSON.stringify(
          {
            pet: this.pet, especie: this.especie, data: this.data, hora: this.hora
          }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }
   ).then(function (result){
    return result.json();
    }).then((dados) => {
    console.log(dados);
    }).catch(function(erro){
    console.log(erro)
    })
  
    this.pet = '';
    this.especie = '';
    this.data = '';
    this.hora = '';
    location.reload();
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
}).catch((erro) => {
    console.log(erro)
})
  }

}
