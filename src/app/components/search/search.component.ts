import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pre-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  public searchFocus = false;
  public search = '';
  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  handleKeyup() {
    this.update.emit(this.search);
  }
}
