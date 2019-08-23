
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


/* Components For Routes*/

import { CitiesViewComponent } from './cities-view/cities-view.component';
import { CitiesForecastViewComponent } from './cities-forecast-view/cities-forecast-view.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { CitySearchResultsComponent } from './city-search-results/city-search-results.component';

const appRoutes: Routes = [

    {
    // The main home screen will be the app-cities-view component
    path: '',
    redirectTo: '/app-cities-view',
    pathMatch: 'full'
    },

    {
    path: 'city/:id',
    component: CitiesForecastViewComponent
    },

    {
    path: 'city-name/:name',
    component: CitySearchResultsComponent
    },

    {
    path: 'app-cities-view',
    component: CitiesViewComponent
    },

    {
    path: 'search',
    component: CitySearchComponent
    }


];

export const routing = RouterModule.forRoot(appRoutes);


