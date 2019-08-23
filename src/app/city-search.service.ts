
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()

/* @Injectable({
  providedIn: 'root'
}) */

export class CitySearchService {

    baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
    queryUrl: string = '?q=';
    endUrl: string = '&units=imperial&appid=b301cf14216627567c5cde76fd1a0a8c';

/* private apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather&units=metric&appid=b301cf14216627567c5cde76fd1a0a8c';
   data: any = {}; */

    constructor(private http: HttpClient) {}

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.searchEntries(term));
    }

    searchEntries(term) {
        return this.http.get(this.baseUrl + this.queryUrl + term + this.endUrl);
    }


}
