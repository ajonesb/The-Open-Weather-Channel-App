
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
    selector: 'app-city-search',
    templateUrl: './city-search.component.html',
    styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent  {

    dataSearchCity: any = {};

    constructor(
        private http: HttpClient,
        private router: Router
    ) {

    }

    cityNameValue = '';

    onEnterSearch(value: string) {
        this.cityNameValue = value;
        console.log(this.cityNameValue);
        this.router.navigate(['./city-name/' + this.cityNameValue]);
    }


}
