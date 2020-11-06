import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyModalPortfolioComponent } from '../buy-modal-portfolio/buy-modal-portfolio.component'
import { SellModalComponent } from '../sell-modal/sell-modal.component'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioList: Array<any>
  loading: boolean

  constructor(private router: Router, private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true
    let tmpPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'))

    if (!tmpPortfolioList || tmpPortfolioList.length === 0) {
      this.portfolioList = []
      this.loading = false
    } else {
      let promisesArray = []
      tmpPortfolioList.forEach(item => {
        const call = this.userService.getStockPrices(item.ticker)
        promisesArray.push(call)
      })

      forkJoin(promisesArray).subscribe(resultArray => {
        for (let i = 0; i < resultArray.length; i++) {
          let prices = resultArray[i][0]

          tmpPortfolioList[i].curPrice = prices.last
          tmpPortfolioList[i].change = tmpPortfolioList[i].curPrice - tmpPortfolioList[i].avgPrice
          tmpPortfolioList[i].marketValue = tmpPortfolioList[i].curPrice * tmpPortfolioList[i].quantity
        }

        tmpPortfolioList = tmpPortfolioList.filter(item => item.quantity != 0)

        this.portfolioList = tmpPortfolioList.sort((a: any, b: any) => 
          (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0)
        )
        this.loading = false
        window.localStorage.setItem('portfolio', JSON.stringify(this.portfolioList))
      })
    }
  }

  goToDetail = (ticker: string) => {
    this.router.navigate([`/details/${ticker}`])
  }

  onBuy = (ticker: string, name: string, curPrice: number) => {
    const modalRef = this.modalService.open(BuyModalPortfolioComponent)

    modalRef.componentInstance.ticker = ticker
    modalRef.componentInstance.name = name
    modalRef.componentInstance.quantity = 0
    modalRef.componentInstance.curPrice = curPrice

    // Finish buying
    modalRef.componentInstance.parentUpdatePortfolio.subscribe(_ => {
      let tmpPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'))
      let promisesArray = []

      tmpPortfolioList.forEach(item => {
        const call = this.userService.getStockPrices(item.ticker)
        promisesArray.push(call)
      })

      forkJoin(promisesArray).subscribe(resultArray => {
        for (let i = 0; i < resultArray.length; i++) {
          let prices = resultArray[i][0]

          tmpPortfolioList[i].curPrice = prices.last
          tmpPortfolioList[i].change = tmpPortfolioList[i].curPrice - tmpPortfolioList[i].avgPrice
          tmpPortfolioList[i].marketValue = tmpPortfolioList[i].curPrice * tmpPortfolioList[i].quantity
        }

        this.portfolioList = tmpPortfolioList.sort((a: any, b: any) => 
          (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0)
        )
        window.localStorage.setItem('portfolio', JSON.stringify(this.portfolioList))
      })
      
    })
  }

  onSell = (ticker: string, name: string, curPrice: number, quantity: number) => {
    const modalRef = this.modalService.open(SellModalComponent)

    modalRef.componentInstance.ticker = ticker
    modalRef.componentInstance.name = name
    modalRef.componentInstance.curQuantity = quantity
    modalRef.componentInstance.curPrice = curPrice
    modalRef.componentInstance.sellQuantity = 0

    // Finish selling
    modalRef.componentInstance.parentUpdatePortfolio.subscribe(_ => {
      let tmpPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'))
      let promisesArray = []

      tmpPortfolioList.forEach(item => {
        const call = this.userService.getStockPrices(item.ticker)
        promisesArray.push(call)
      })

      forkJoin(promisesArray).subscribe(resultArray => {
        for (let i = 0; i < resultArray.length; i++) {
          let prices = resultArray[i][0]

          tmpPortfolioList[i].curPrice = prices.last
          tmpPortfolioList[i].change = tmpPortfolioList[i].curPrice - tmpPortfolioList[i].avgPrice
          tmpPortfolioList[i].marketValue = tmpPortfolioList[i].curPrice * tmpPortfolioList[i].quantity
        }

        tmpPortfolioList = tmpPortfolioList.filter(item => item.quantity != 0)
      
        this.portfolioList = tmpPortfolioList.sort((a: any, b: any) => 
          (a.ticker > b.ticker) ? 1 : ((b.ticker > a.ticker) ? -1 : 0)
        )
        window.localStorage.setItem('portfolio', JSON.stringify(this.portfolioList))
      })
    })
  }
}
