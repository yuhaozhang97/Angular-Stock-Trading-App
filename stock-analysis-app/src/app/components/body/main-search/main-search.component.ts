import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { debounce } from 'lodash';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  loading: Boolean
  options: String[]
  @Input() label: String

  constructor(private userService: UserService) { 
    this.getOptions = debounce(this.getOptions, 800)
  }

  ngOnInit(): void {
    this.loading = false
  }

  // Fetch autocomplete options
  getOptions(userInput: String) {
    if (userInput) {
      this.loading = true
      this.userService.getAutoCompleteOptions(userInput).subscribe(options => {
        this.options = options
        this.loading = false
      })
    }
  }

  // Remove company name in the input
  keepTickerOnly = () => {
    if (this.label.includes('|')) {
      const ticker: String = this.label.split(' | ')[0]
      this.label = ticker
    }
  }
}
