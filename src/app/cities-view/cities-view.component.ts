import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-cities-view',
  templateUrl: './cities-view.component.html',
  styleUrls: ['./cities-view.component.css']
})
export class CitiesViewComponent {

  private apiEndpoint = 'https://api.openweathermap.org/data/2.5/group?id=2968815,3128759,6355233,6535297,2759794&units=metric&appid=b301cf14216627567c5cde76fd1a0a8c';
  data: any = {};

  constructor(private http: HttpClient) {
    console.log('show all 5 city objects from api below');
    this.getApiData();
    this.displayApiData();
   }

 getApiData() {
    return this.http.get(this.apiEndpoint);
  }

 displayApiData() {
   this.getApiData().subscribe(data => {
     console.log(data);
     this.data = data;
   });
  }

 }



