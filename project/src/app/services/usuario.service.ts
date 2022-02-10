import { Injectable } from '@angular/core';
import { logging, promise } from 'protractor';
import { logWarnings } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios(){
    return new Promise((resolvido, rejeitado) => {

      fetch('/api/buscar_usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(reseultado => reseultado.json())
        .then(resolvido)
        .catch(rejeitado);
    })
  }

login(nickname, password) {
  return new Promise((resolve, reject) => {
    fetch('/api/criar_usuario',
    {
        method: 'POST',
        body: JSON.stringify(
            {
                nome: nickname, pass: password
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then(function (result){
    return result.json();
}).then((resolve)
).catch(reject);
});
}

}
