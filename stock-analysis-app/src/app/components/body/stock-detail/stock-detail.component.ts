import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { forkJoin, interval, Subscription } from 'rxjs';
import * as Highcharts from 'highcharts/highstock';
import { Options } from 'highcharts/highstock'
import { UserService } from '../../../services/user.service'
import { NewsModalContentComponent } from '../../news-modal-content/news-modal-content.component'
import { BuyModalComponent } from '../../buy-modal/buy-modal.component'

import sma from 'highcharts/indicators/indicators'
sma(Highcharts);

import vbp from 'highcharts/indicators/volume-by-price'
vbp(Highcharts);


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  error: Boolean
  pricesError: Boolean
  newsError: Boolean
  chartError: Boolean
  twoYearsChartError: Boolean
  loading: Boolean
  subscription: Subscription
  favorite: Boolean
  marketClose: Boolean
  
  ticker: String
  closeTime: String
  curTime: String
  stockInfo: any
  prices: any
  chartData: any
  twoYearsChartsOptions: Options
  news: any
  lastPrice: number
  change: number
  changePercent: number
  star: boolean

  Highcharts: typeof Highcharts = Highcharts
  chartOptions: Options

  constructor(private route: ActivatedRoute, private userService: UserService, private modalService: NgbModal, private _flashMessagesService: FlashMessagesService) {
    this.route.params.subscribe(params => this.ticker = params.ticker.toUpperCase())
  }

  ngOnInit(): void {
    this.loadContent()
    const source = interval(15000)
    this.subscription = source.subscribe(_ => this.periodicUpdate())
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe()
  }

  periodicUpdate = () => {
    if (!this.marketClose) {
      this.userService.getStockPrices(this.ticker).subscribe(res => {
        this.prices = res[0]
        this.fillMarketStatus()
        this.calculateChange()

        this.userService.getChartData(this.ticker, this.curTime.slice(0, 10)).subscribe(res => {
          this.chartData = res
        })
      })
    }
  } 

  loadContent = () => {
    this.loading = true
    this.error = false

    // Fetch watchlist
    const curWatchlist = JSON.parse(window.localStorage.getItem('watchlist'))
    this.star = false
    if (curWatchlist) {
      for (let i = 0; i < curWatchlist.length; i++) {
        if (curWatchlist[i].ticker === this.ticker) {
          this.star = true
          break
        }
      }
    }

    // Get ticker, company name, ...
    const call1 = this.userService.getStockInfo(this.ticker)

    // Get prices...
    const call2 = this.userService.getStockPrices(this.ticker)

    // Get News info
    const call4 = this.userService.getNews(this.ticker)

    forkJoin([call1, call2])
      .subscribe(results => {
        this.stockInfo = results[0]

        this.prices = results[1][0]
        console.log('hi', this.prices)
        if (this.prices.prevClose === null) {
          this.pricesError = true
        }

        this.curTime = this.formatTime(new Date())
        
        const twoYearAgo: String = (parseInt(this.curTime.slice(0, 4)) - 2).toString() + this.curTime.slice(4)

        this.fillMarketStatus()
        this.calculateChange()

         // Get chart info
        const call3 = this.marketClose ? this.userService.getChartData(this.ticker, this.closeTime.slice(0, 10)) : this.userService.getChartData(this.ticker, this.curTime.slice(0, 10))
        
        // Get 2 years chart info
        const call5 = this.userService.getTwoYearsChartsData(this.ticker, twoYearAgo)
        
        forkJoin([call3, call4, call5])
          .subscribe(results => {
            this.chartData = results[0]
            if (this.chartData.length === 0) {
              this.chartError = true
            }

            this.news = results[1]
            if (this.news.length === 0) {
              this.newsError = true
            }

            const twoYearsChartsRawData = results[2]
            if (twoYearsChartsRawData.length === 0) {
              this.twoYearsChartError = true
            } else {
              this.fillInOptions(twoYearsChartsRawData)
            }
          
            this.loading = false
          })
      }, err => {
        if(err.status === 404) {
          this.error = true
          this.loading = false
        }
      })
  }

  toggleStar = () => {
    if (this.star) {
      this._flashMessagesService.show(`${this.ticker} removed from Watchlist.`, { cssClass: 'alert-danger', timeout: 3000, showCloseBtn: true });
    } else {
      this._flashMessagesService.show(`${this.ticker} added to Watchlist.`, { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });
    }
    this.star = !this.star
  }

  @HostListener('window:beforeunload')
  updateLocalStorage() {
    let found: boolean = false
    let curWatchlist = JSON.parse(window.localStorage.getItem('watchlist'))

    if (curWatchlist) {
      for (let i = 0; i < curWatchlist.length; i++) {
        if (curWatchlist[i].ticker === this.ticker) {
          found = true
          break
        }
      }
    } else {
      curWatchlist = []
    }

    if (this.star) {
      if (!found) {
        curWatchlist.push({
          ticker: this.ticker,
          name: this.stockInfo.name,
          lastPrice: this.lastPrice,
          change: this.change,
          changePercent: this.changePercent
        })

        window.localStorage.setItem('watchlist', JSON.stringify(curWatchlist))
      } 
    } else {
      if (found) {
        const newWatchList = curWatchlist.filter(item => (
          item.ticker !== this.ticker
        ))

        window.localStorage.setItem('watchlist', JSON.stringify(newWatchList))
      }
    }
  }

  fillMarketStatus = () => {
    // Market close or not
    if (!this.prices.bidPrice) {
      this.marketClose = true

      // Convert to local time
      const closeDate: Date = new Date(this.prices.timestamp)
      this.closeTime = this.formatTime(closeDate)
    } else {
      this.marketClose = false
      if (!this.prices.mid) {
        this.prices.mid = '-'
      }
    }
  }

  calculateChange = () => {
    this.lastPrice = this.prices.last
    this.change = this.prices.last - this.prices.prevClose
    this.changePercent = (this.prices.last - this.prices.prevClose) / this.prices.prevClose * 100
  }

  formatTime = (date: Date) => {
    return date.getFullYear() + 
      '-' +
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : '0' + (date.getMonth() + 1)) +
      '-' +
      (date.getDate() > 9
        ? date.getDate()
        : '0' + date.getDate()) +
      ' ' +
      (date.getHours() < 10 
        ? '0' 
        : '') + date.getHours() +
      ':' +
      (date.getMinutes() < 10 
        ? '0' 
        : '') + date.getMinutes() +
      ':' +
      (date.getSeconds() < 10 
        ? '0' 
        : '') + date.getSeconds()
  }

  openNewsContentModal = (singleNews: any) => {
    const monthNames: String[] = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const publishedDate: Date = new Date(singleNews.publishedAt)
    const formattedDate = `${monthNames[publishedDate.getMonth()]} ${publishedDate.getDate()}, ${publishedDate.getFullYear()}`

    const modalRef = this.modalService.open(NewsModalContentComponent)

    modalRef.componentInstance.source = singleNews.source.name
    modalRef.componentInstance.publishedAt = formattedDate
    modalRef.componentInstance.title = singleNews.title
    modalRef.componentInstance.description = singleNews.description
    modalRef.componentInstance.url = singleNews.url
  }

  openBuyModal = () => {
    const modalRef = this.modalService.open(BuyModalComponent)

    modalRef.componentInstance.ticker = this.ticker
    modalRef.componentInstance.name = this.stockInfo.name
    modalRef.componentInstance.quantity = 0
    modalRef.componentInstance.curPrice = this.lastPrice
  }

  fillInOptions = (twoYearsChartsRawData) => {
    let prices = []
    let volumes = []
    let candleSticks = []
    twoYearsChartsRawData.map(entry => {
      const year = parseInt(entry.date.slice(0, 4))
      const month = parseInt(entry.date.slice(5, 7))
      const day = parseInt(entry.date.slice(8, 10))
      const hour = parseInt(entry.date.slice(11, 13))
      const minute = parseInt(entry.date.slice(14, 16))

      const date = Date.UTC(year, month - 1, day, hour - 8, minute)
      prices.push([date, entry.close])
      volumes.push([date, entry.volume])
      candleSticks.push([date, entry.open, entry.high, entry.low, entry.close])
    })

    // Fill in 2 years charts options
    this.twoYearsChartsOptions = {
      chart: {
        height: 680
      },
      rangeSelector: {
        selected: 2
      },
      title: {
        text: this.ticker.toUpperCase() + ' Historical'
      },
      subtitle: {
        text: 'With SMA and Volume by Price technical indicators'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: [
        {
          startOnTick: false,
          endOnTick: false,
          labels: {
              align: 'right',
              x: -3
          },
          title: {
              text: 'OHLC'
          },
          height: '60%',
          lineWidth: 2,
          resize: {
              enabled: true
          }
        },
        {
          labels: {
              align: 'right',
              x: -3
          },
          title: {
              text: 'Volume'
          },
          top: '65%',
          height: '35%',
          offset: 0,
          lineWidth: 2
        }
      ],
      tooltip: {
        split: true
      },
      series: [
        {
          type: 'candlestick',
          name: this.ticker.toUpperCase(),
          id: 'ticker',
          zIndex: 2,
          data: candleSticks,
          yAxis: 0
        },
        {
          type: 'column',
          name: 'Volume',
          id: 'volume',
          data: volumes,
          yAxis: 1
        },
        {
          type: 'vbp',
          linkedTo: 'ticker',
          params: {
              volumeSeriesID: 'volume'
          },
          dataLabels: {
              enabled: false
          },
          zoneLines: {
              enabled: false
          }
        },
        {
          type: 'sma',
          linkedTo: 'ticker',
          zIndex: 1,
          marker: {
              enabled: false
          }
        }
      ]
    }
  }
}
