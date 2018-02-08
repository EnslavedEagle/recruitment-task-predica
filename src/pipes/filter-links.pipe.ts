import { Pipe, PipeTransform } from '@angular/core';
import { Category, Link } from '../interfaces';

@Pipe({
  name: 'filterLinks'
})
export class FilterLinksPipe implements PipeTransform {
  transform(links: Link[], search: string): Link[] {
    if (!links) return null;
    if (!search) return links;
    return links.filter((link) => link.title.toLowerCase().includes(search.toLowerCase()));
  }
}
