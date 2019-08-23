import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /* Here below I have implemented some basic test functions such as testing to make sure
  we are showing the main heading, Text labels, API City names. */

  // Test Elements

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getCityTextbox() {
    return element(by.css('#city-label')).getText() as Promise<string>;
  }

  getTemperatureTextbox() {
    return element(by.css('#city-temperature-label')).getText() as Promise<string>;
  }

  getWindStrengthTextbox() {
    return element(by.css('#city-wind-label')).getText() as Promise<string>;
  }

  // Test if Cities are showing from API

  getSydneyApiLink() {
    return element(by.css('[ng-reflect-router-link="/city,2147714"]'));
  }

  getBlacktownApiLink() {
    return element(by.css('[ng-reflect-router-link="/city,2175411"]'));
  }

  getSurryHillsApiLink() {
    return element(by.css('[ng-reflect-router-link="/city,2147821"]'));
  }

  getMountDruittApiLink() {
    return element(by.css('[ng-reflect-router-link="/city,2156671"]'));
  }

  getMelbourneApiLink() {
    return element(by.css('[ng-reflect-router-link="/city,2158177"]'));
  }


}
