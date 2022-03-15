import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idProduto = '';
  lista = [];

  constructor( private route: ActivatedRoute ) {
    this.idProduto = route.snapshot.paramMap.get('id');
   }

   


  ngOnInit() {

    fetch('/api/buscar_produtao',
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
