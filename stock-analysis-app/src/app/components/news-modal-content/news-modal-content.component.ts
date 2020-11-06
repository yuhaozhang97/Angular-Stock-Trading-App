import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-modal-content',
  templateUrl: './news-modal-content.component.html',
  styleUrls: ['./news-modal-content.component.css']
})
export class NewsModalContentComponent implements OnInit {
  @Input() source: String
  @Input() publishedAt: any
  @Input() title: String
  @Input() description: String
  @Input() url: String

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
