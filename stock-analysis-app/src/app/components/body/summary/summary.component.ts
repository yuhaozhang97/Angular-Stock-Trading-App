import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { Options } from 'highcharts/highstock'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() stockInfo: any
  @Input() prices: any
  @Input() chartError: Boolean
  @Input() chartData: any
  @Input() marketClose: Boolean
  @Input() change: number

  Highcharts: typeof Highcharts = Highcharts
  chartOptions: Options

  constructor() { }

  ngOnInit(): void {
    let prices = []
    this.chartData.map(entry => {
      const year = parseInt(entry.date.slice(0, 4))
      const month = parseInt(entry.date.slice(5, 7))
      const day = parseInt(entry.date.slice(8, 10))
      const hour = parseInt(entry.date.slice(11, 13))
      const minute = parseInt(entry.date.slice(14, 16))

      const date = Date.UTC(year, month - 1, day, hour - 8, minute)
      prices.push([date, entry.close])
    })

    let chartColor: string
    if (this.change > 0) {
      chartColor = 'green'
    } else if (this.change === 0) {
      chartColor = 'black'
    } else {
      chartColor = 'red'
    }

    this.chartOptions = {
      title: {
        text: this.stockInfo.ticker.toUpperCase()
      },
      xAxis: {
        type: 'datetime'
      },
      rangeSelector: {
        enabled: false
      },
      series: [
        {
          type: 'line',
          pointInterval: 24 * 3600 * 1000,
          data: prices
        }
      ],
      colors: [
        chartColor
      ]
    }
  }

}
