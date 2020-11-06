import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() news: any
  @Output() clicked = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick = () => {
    this.clicked.emit(this.news)
  }
}
