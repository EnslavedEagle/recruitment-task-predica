import { Pipe, PipeTransform } from '@angular/core';
import { Link } from '../interfaces';

// Faker tends to generate URLs with or without http:// (randomly as it seems)
@Pipe({
  name: 'fixLinks'
})
export class FixLinksPipe implements PipeTransform {
  transform(links: Link[]): Link[] {
    if (!links) return null;
    return <Link[]>links.map((link) => {
      if (!/$http:\/\//.test(link.url)) {
        link.url = `http://${link}`;
      }
      return link;
    });
  }
}
