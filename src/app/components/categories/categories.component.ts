import { Component, Input } from '@angular/core';
import { Category, Link } from '../../../interfaces';

@Component({
  selector: 'pre-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent {
  @Input() public categories: Category[] = [];
  @Input() public search = '';

  constructor() {}
}
