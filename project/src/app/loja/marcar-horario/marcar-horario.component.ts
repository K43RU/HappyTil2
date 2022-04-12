import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marcar-horario',
  templateUrl: './marcar-horario.component.html',
  styleUrls: ['./marcar-horario.component.css']
})
export class MarcarHorarioComponent implements OnInit {

  constructor( private router: Router ) { }

  pet = '';
  especie = '';
  data = undefined;
  hora = undefined;
  ngOnInit() {
  }

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

}
