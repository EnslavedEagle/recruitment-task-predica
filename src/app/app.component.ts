import { Component, OnInit } from '@angular/core';
import { Category, Link } from '../interfaces';
import { LinksService } from '../services/links.service';

@Component({
  selector: 'pre-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public searchFocus: boolean = false;
  public categories: Category[];
  public search = '';
  
  constructor(private _linksService: LinksService) {}
  
  ngOnInit() {
    this._linksService.fetchLinks()
      .subscribe((categories) => this.categories = categories);
  }
}
