import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  // Dados do gráfico, estático.
  readonly data = [
    // Gênero musical
    // Porcentagem de pessoas que o escolheram
    {
      name: 'Pagode',
      y: 1567,
      color: '#ffadad',
    },
    {
      name: 'Axé',
      y: 2548,
      color: '#ffd6a5',
    },
    {
      name: 'Sertanejo',
      y: 3265,
      color: '#fdffb6',
    },
    {
      name: 'Country',
      y: 4546,
      color: '#caffbf',
    },
    {
      name: 'Sertanejo universitário',
      y: 5466,
      color: '#9bf6ff',
    },
    {
      name: 'Samba',
      y: 5467,
      color: '#a0c4ff',
    },
    {
      name: 'Dance',
      y: 6456,
      color: '#bdb2ff',
    },
    {
      name: 'Reggae',
      y: 8746,
      color: '#ffc6ff',
    },
    {
      name: 'Forró',
      y: 9846,
      color: '#f4f9e9',
    },
  ];

  constructor() {}

  // Retorna um observable com os dados do gráfico.
  public getDados(): Observable<any> {
    return new Observable((observable) => {
      observable.next(this.data);
      // .next => é um método do observable que envia um valor para o observador.
      observable.complete();
      // .complete => é um método do observable que indica que a conexão foi encerrada.
    });
  }
}
