import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // For dev uncomment the following line and add ${this.backendURL} in front of every /api
  // backendURL: String = 'http://localhost:3080'
  backendURL: string = 'http://nodeapp-env.eba-kgbwbpmw.us-east-1.elasticbeanstalk.com/'

  constructor(private http: HttpClient) { }

  getAutoCompleteOptions(input: String): Observable<String[]> {
    if (input) {
      return this.http.get<String[]>(`/api/options/${input}`)
    }
  }

  getStockInfo(ticker: String): Observable<any> {
    console.log(`user service, ticker is: ${ticker}`)

    return this.http.get<any>(`/api/info/${ticker}`)
  }

  getStockPrices(ticker: String): Observable<any> {
    return this.http.get<any>(`/api/prices/${ticker}`)
  }

  getChartData(ticker: String, start: String): Observable<any> {
    return this.http.get<any>(`/api/charts/${ticker}/${start}`)
  }

  getTwoYearsChartsData(ticker: String, start: String): Observable<any> {
    return this.http.get<any>(`/api/twoyearscharts/${ticker}/${start}`)
  }

  getNews(ticker: String): Observable<any> {
    return this.http.get<any>(`/api/news/${ticker}`)
  }
}
