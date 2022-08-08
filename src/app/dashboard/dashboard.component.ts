import { Component, OnInit } from '@angular/core';

// Highcharts
import * as Highcharts from 'highcharts';
import { DadosService } from './service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
// Highcharts

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  public graficoDeRosca!: any;
  public graficosDeBarras!: any;

  constructor(private dadosService: DadosService) {}

  public carregarGraficoDeRosca() {
    this.dadosService.getDados().subscribe((data) => {
      this.graficoDeRosca = {
        chart: {
          plotBorderWidth: 0,
          plotShadow: false,
          type: 'pie',
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        legend: {
          align: 'right',
          verticalAlign: 'middle',
        },
        tooltip: {
          pointFormat: '<b>{point.percentage:.2f}%</b>',
        },
        accessibility: {
          point: {
            valueSuffix: '%',
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
          },
        },
        series: [
          {
            innerSize: '50%',
            data: data,
          },
        ],
      };
    });

    Highcharts.chart('graficoDeRosca', this.graficoDeRosca);
  }

  public carregarGraficoDeBarras() {
    this.dadosService.getDados().subscribe((data) => {
      this.graficosDeBarras = {
        chart: {
          type: 'column',
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        legend: {
          enabled: false,
        },
        xAxis: {
          // Reduz a quantidade de caracteres de palavras com mais de 4 caracteres.
          categories: data.map((item) => {
            if (item.name.length > 4) {
              return item.name.substr(0, 4) + '...';
            } else {
              return item.name;
            }
          }),
        },
        yAxis: {
          min: 0,
          title: {
            text: '',
          },
        },
        tooltip: {
          pointFormat: '<b>{point.y:.0f}</b>',
        },
        series: [
          {
            data: data,
          },
        ],
      };
    });

    Highcharts.chart('graficoDeBarras', this.graficosDeBarras);
  }

  ngOnInit() {
    this.carregarGraficoDeRosca();
    this.carregarGraficoDeBarras();
  }
}
