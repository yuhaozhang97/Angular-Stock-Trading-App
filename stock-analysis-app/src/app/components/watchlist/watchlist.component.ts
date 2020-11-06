import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist: Array<any>
  loading: boolean

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true
    let tmpWatchlist = JSON.parse(window.localStorage.getItem('watchlist'))

    if (!tmpWatchlist || tmpWatchlist.length === 0) {
      this.watchlist = []
      this.loading = false
    } else {
      let promisesArray = []
      tmpWatchlist.forEach(item => {
        const call = this.userService.getStockPrices(item.ticker)
        promisesArray.push(call)
      })

      forkJoin(promisesArray).subscribe(resultArray => {
        for (let i = 0; i < resultArray.length; i++) {
          let prices = resultArray[i][0]

          tmpWatchlist[i].lastPrice = prices.last
          tmpWatchlist[i].change = prices.last - prices.prevClose
          tmpWatchlist[i].changePercent = (prices.last - prices.prevClose) / prices.prevClose * 100        
        }

        this.watchlist = tmpWatchlist.sort((a: any, b: any) => 
          (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0)
        )
        this.loading = false
        window.localStorage.setItem('watchlist', JSON.stringify(this.watchlist))
      })
    }
  }

  onDelete = (ticker: string) => {
    let tmpWatchlist = JSON.parse(window.localStorage.getItem('watchlist'))
     
    tmpWatchlist = tmpWatchlist.filter(item => (
      item.ticker !== ticker
    ))
    
    if (tmpWatchlist.length > 0) {
      let promisesArray = []
      tmpWatchlist.forEach(item => {
        const call = this.userService.getStockPrices(item.ticker)
        promisesArray.push(call)
      })

      forkJoin(promisesArray).subscribe(resultArray => {
        for (let i = 0; i < resultArray.length; i++) {
          let prices = resultArray[i][0]

          tmpWatchlist[i].lastPrice = prices.last
          tmpWatchlist[i].change = prices.last - prices.prevClose
          tmpWatchlist[i].changePercent = (prices.last - prices.prevClose) / prices.prevClose * 100        
        }

        this.watchlist = tmpWatchlist.sort((a: any, b: any) => 
          (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0)
        )
        window.localStorage.setItem('watchlist', JSON.stringify(this.watchlist))
      })
    } else {
      this.watchlist = tmpWatchlist
      window.localStorage.setItem('watchlist', JSON.stringify(this.watchlist))
    }
  }

  goToDetail = (ticker: string) => {
    this.router.navigate([`/details/${ticker}`])
  }
}
