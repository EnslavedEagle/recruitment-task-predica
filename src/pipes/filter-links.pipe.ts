import { Pipe, PipeTransform } from '@angular/core';
import { Category, Link } from '../interfaces';

@Pipe({
  name: 'filterLinks'
})
export class FilterLinksPipe implements PipeTransform {
  transform(categories: Category[], search: string): Category[] {
    if (!categories) return null;
    if (!search) return categories;
    return categories.filter((category: Category) => {
      const linksCopy = [...category.links];
      const filteredLinks = <Link[]>linksCopy.filter((link) => link.title.toLowerCase().includes(search.toLowerCase()));
      return filteredLinks.length > 0;
    });
  }
}
