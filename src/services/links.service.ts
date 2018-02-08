import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from '../interfaces';

import { environment } from '../environments/environment';

@Injectable()
export class LinksService {
  constructor (private _http: HttpClient) {}

  fetchLinks (): Observable<Category[]> {
    return this._http.get<Category[]>(`${environment.apiUrl}/links`);
  }
}
