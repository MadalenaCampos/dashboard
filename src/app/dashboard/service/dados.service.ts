import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  // Dados do gráfico, estático.
  readonly data = [
    // [Gênero musical, Quantidade de pessoas que o escolheram]
    ['Sertanejo pop', 82],
    ['Sertanejo universitário', 77],
    ['Sertanejo', 75],
    ['Funk carioca', 62],
    ['Pop', 58],
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
