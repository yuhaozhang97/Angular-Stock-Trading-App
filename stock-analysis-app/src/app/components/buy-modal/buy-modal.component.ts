import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.css']
})
export class BuyModalComponent implements OnInit {
  @Input() ticker: string
  @Input() name: string
  @Input() curPrice: number
  @Input() quantity: number

  constructor(public activeModal: NgbActiveModal, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }

  updatePortfolio = () => {
    // Close the modal
    this.activeModal.dismiss('Cross click')
    this._flashMessagesService.show(`${this.ticker} bought successfully!`, { cssClass: 'alert-success', timeout: 3000, showCloseBtn: true });

    // Update local storage
    let portfolioList: Array<any> = []
    let found: boolean = false
    const localPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'))
    if (localPortfolioList) {
      portfolioList = localPortfolioList
    }

    for (let i = 0; i < portfolioList.length; i++) {
      if (portfolioList[i].ticker == this.ticker) {
        found = true

        let prevQuantity = portfolioList[i].quantity
        let prevTotalCost = portfolioList[i].totalCost

        portfolioList[i].quantity = prevQuantity + this.quantity
        portfolioList[i].totalCost = prevTotalCost + this.quantity * this.curPrice
        portfolioList[i].avgPrice = portfolioList[i].totalCost / portfolioList[i].quantity
        portfolioList[i].curPrice = this.curPrice
        portfolioList[i].change = portfolioList[i].avgPrice - portfolioList[i].curPrice
        portfolioList[i].marketValue = portfolioList[i].curPrice * portfolioList[i].quantity

        break
      }
    }

    if (!found) {
      portfolioList.push({
        ticker: this.ticker,
        name: this.name,
        quantity: this.quantity,
        totalCost: this.quantity * this.curPrice,
        avgPrice: this.curPrice,
        curPrice: this.curPrice,
        change: 0,
        marketValue: this.quantity * this.curPrice
      })
    }

    // Store to local storage
    window.localStorage.setItem('portfolio', JSON.stringify(portfolioList))
  }
}
