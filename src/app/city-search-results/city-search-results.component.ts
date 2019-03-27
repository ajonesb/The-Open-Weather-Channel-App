
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-city-search-results',
  templateUrl: './city-search-results.component.html',
  styleUrls: ['./city-search-results.component.css']
})
export class CitySearchResultsComponent {

    private apiCityUrl;
    dataCity: any = {};

    constructor(
        private http: HttpClient,
        private location: Location,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe( params =>  this.getCityForecastSearch(params['name']));
        this.getCitySearchTest();
        this.getCitySearchData();
    }


    getCityForecastSearch(cityName) {
        console.log(cityName);
        this.apiCityUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=b301cf14216627567c5cde76fd1a0a8c';
    }

    getCitySearchData() {
        return this.http.get(this.apiCityUrl);
    }

    getCitySearchTest() {
        this.getCitySearchData().subscribe(dataCity => {
            console.log(dataCity);
            this.dataCity = dataCity;
        });
    }

    // Goind back to the previous page, returnHome() called on click on search results component
    returnHome(): void {
        this.location.back();
    }

}


