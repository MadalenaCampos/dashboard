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
      name: 'Sertanejo pop',
      y: 39.23,
      color: '#904C77',
    },
    {
      name: 'Sertanejo universitário',
      y: 35.14,
      color: '#E49AB0',
    },
    {
      name: 'Sertanejo',
      y: 18,
      color: '#ECB8A5',
    },
    {
      name: 'Funk carioca',
      y: 6,
      color: '#899878',
    },
    {
      name: 'Pop',
      y: 1.63,
      color: '#93B7BE',
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
