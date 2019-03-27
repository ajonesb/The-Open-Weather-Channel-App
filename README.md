# Angular The Open Weather Channel Application

The application uses Open Weather Data API : https://openweathermap.org

# Summary of Application

A single page application that presents a list of 5 European cities which displays the cities names, average temperature for each city, and wind strength on the main component page.

Clicking on each city item directs the user to view the selected cities extended forecast for every 3 hours in the next 5 days.

In addition as an extra bonus functionality, the main cities page has a built in search to enter a search for any city in the world which shows for the city searched, the same extended forecast results for every 3 hours in the next 5 days.

# The UI

The UI consists of Angular Material and Bootstrap for the look and feel, responsible mobile. Boostrap is already implemented on the main index.html via Bootstrap cdn's for quick setup and development along with JQuery and Popper. 

Angular Material needs to be installed with the following ng serve command below in the instalation instructions.


# Instalation Instructions:

## Make sure you have Node installed globally
NodeJs (v8 or greater)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.
## Install Angular CLI
`npm install @angular/cli -g`


## Check Angular Version
`ng --version`


## Install NPM
`npm install`


## Angular Material
`ng add @angular/material`


## Navigate to Project Root App Directory
`cd angular-openweatherapp`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

I have implemented some basic test functions with Protractor for the homepage for cities such as testing to make sure we are showing the main heading, Text labels, API City names for the main cities page.

The same methods can be reused for other components as well to continue testing.

To view the end-to-end functional testing please navigate to the following directories:
*  e2e -> src -> app.e2e-spec.ts and app.po.ts

Each components as well has it's own spec file additionally, the testing was done straight on the e2e directory
however.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
