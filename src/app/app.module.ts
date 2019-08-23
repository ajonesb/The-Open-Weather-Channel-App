
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

/* Angular Material */
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';




/* Spinner */
import { NgxSpinnerModule } from 'ngx-spinner';

/* Components */
import { AppComponent } from './app.component';
import { CitiesViewComponent } from './cities-view/cities-view.component';
import { CitiesForecastViewComponent } from './cities-forecast-view/cities-forecast-view.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { CitySearchService } from './city-search.service';
import { CitySearchResultsComponent } from './city-search-results/city-search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesViewComponent,
    CitiesForecastViewComponent,
    CitySearchComponent,
    CitySearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    routing,
    NgxSpinnerModule


  ],
  providers: [CitySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
