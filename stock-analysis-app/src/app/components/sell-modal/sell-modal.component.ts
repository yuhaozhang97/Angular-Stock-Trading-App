import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sell-modal',
  templateUrl: './sell-modal.component.html',
  styleUrls: ['./sell-modal.component.css']
})
export class SellModalComponent implements OnInit {
  @Input() ticker: string
  @Input() name: string
  @Input() curPrice: number
  @Input() sellQuantity: number
  @Input() curQuantity: number
  @Output() parentUpdatePortfolio = new EventEmitter<any>()

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  updatePortfolio = () => {
    // Close the modal
    this.activeModal.dismiss('Cross click')

    // Update local storage
    let portfolioList: Array<any> = []
    const localPortfolioList = JSON.parse(window.localStorage.getItem('portfolio'))
    if (localPortfolioList) {
      portfolioList = localPortfolioList
    }

    for (let i = 0; i < portfolioList.length; i++) {
      if (portfolioList[i].ticker == this.ticker) {
        let prevQuantity = portfolioList[i].quantity

        portfolioList[i].quantity = prevQuantity - this.sellQuantity
        portfolioList[i].totalCost = portfolioList[i].quantity * portfolioList[i].avgPrice
        portfolioList[i].curPrice = this.curPrice
        portfolioList[i].change = portfolioList[i].avgPrice - portfolioList[i].curPrice
        portfolioList[i].marketValue = portfolioList[i].curPrice * portfolioList[i].quantity

        break
      }
    }

    // Store to local storage
    window.localStorage.setItem('portfolio', JSON.stringify(portfolioList))

    // Let parent update portfolio item prices
    this.parentUpdatePortfolio.emit()
  }

}
