import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from "highcharts-angular";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MainSearchComponent } from './components/body/main-search/main-search.component';
import { StockDetailComponent } from './components/body/stock-detail/stock-detail.component';
import { SummaryComponent } from './components/body/summary/summary.component';
import { NewsComponent } from './components/body/news/news.component';
import { NewsModalContentComponent } from './components/news-modal-content/news-modal-content.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BuyModalComponent } from './components/buy-modal/buy-modal.component';
import { SellModalComponent } from './components/sell-modal/sell-modal.component';
import { BuyModalPortfolioComponent } from './components/buy-modal-portfolio/buy-modal-portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainSearchComponent,
    StockDetailComponent,
    SummaryComponent,
    NewsComponent,
    NewsModalContentComponent,
    WatchlistComponent,
    PortfolioComponent,
    BuyModalComponent,
    SellModalComponent,
    BuyModalPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    FlexLayoutModule,
    CommonModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
