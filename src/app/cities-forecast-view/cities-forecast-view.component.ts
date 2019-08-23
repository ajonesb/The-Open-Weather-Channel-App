
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


/* import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap'; */


@Component({
  selector: 'app-cities-forecast-view',
  templateUrl: './cities-forecast-view.component.html',
  styleUrls: ['./cities-forecast-view.component.css']
})


export class CitiesForecastViewComponent implements OnInit {

    private cityApiUrl;
    cityData: any = {};

    constructor(
        private http: HttpClient,
        private location: Location,
        private route: ActivatedRoute
    ) {
        console.log('Below showing specific city data from Open Weather API');
        this.route.params.subscribe( params =>  this.getCityForecast(params['id']));
        this.getCityTest();
        this.getCityData();
    }

    ngOnInit() {
    }

    getCityForecast(cityId) {
        console.log(cityId);
        this.cityApiUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&units=imperial&appid=b301cf14216627567c5cde76fd1a0a8c';
    }

    getCityData() {
        return this.http.get(this.cityApiUrl);
    }

    getCityTest() {
        this.getCityData().subscribe(cityData => {
            console.log(cityData);
            this.cityData = cityData;
        });
    }

    // Return to Homepage component, backHome() called on click in the cities-forecast-view.component
    backHome(): void {
        this.location.back();
    }

}


