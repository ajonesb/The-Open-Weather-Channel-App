import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Open Weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

/*
  Below I have implemented some basic test functions such as testing to make sure
  we are showing the main heading, Text labels, API City names.
*/

  // Test Elements

  it('should display The Open Weather Channel heading.', () => {
    page.navigateTo();
    // Pause browser for each test with browser.pause();
    expect(page.getTitleText()).toEqual('The Open Weather Channel');
  });

  it('should display CITY label.', () => {
    page.navigateTo();
    expect(page.getCityTextbox()).toEqual('CITY');
  });

  it('should display AVERAGE TEMPERATURE (F) label.', () => {
    page.navigateTo();
    expect(page.getTemperatureTextbox()).toEqual('AVERAGE TEMPERATURE (F)');
  });

  it('should display AVERAGE WIND STRENGTH (m/s) label.', () => {
    page.navigateTo();
    expect(page.getWindStrengthTextbox()).toEqual('AVERAGE WIND STRENGTH (m/s)');
  });

   // Test if Cities Are Showing From API

  it ('Should show correctly city of Sydney from API Data.', () => {
    page.navigateTo();
    expect(page.getSydneyApiLink().getText()).toEqual('Paris');
  });

  it ('Should show correctly city of Blacktown from API Data.', () => {
    page.navigateTo();
    expect(page.getBlacktownApiLink().getText()).toEqual('Província de Barcelona');
  });

  it ('Should show correctly city of Surry Hills from API Data.', () => {
    page.navigateTo();
    expect(page.getSurryHillsApiLink().getText()).toEqual('Provincia de Madrid');
  });

  it ('Should show correctly city of Mount Druitt from API Data.', () => {
    page.navigateTo();
    expect(page.getMountDruittApiLink().getText()).toEqual('San Vitaliano');
  });

  it ('Should show correctly city of Melbourne from API Data.', () => {
    page.navigateTo();
    expect(page.getMelbourneApiLink().getText()).toEqual('Amsterdam');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
