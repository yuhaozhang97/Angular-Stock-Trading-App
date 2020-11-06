import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainSearchComponent } from './components/body/main-search/main-search.component'
import { StockDetailComponent } from './components/body/stock-detail/stock-detail.component'
import { WatchlistComponent } from './components/watchlist/watchlist.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'

const routes: Routes = [
  { path: '', component: MainSearchComponent },
  { path: 'details/:ticker', component: StockDetailComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'portfolio', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
