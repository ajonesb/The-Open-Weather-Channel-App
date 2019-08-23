import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitySearchResultsComponent } from './city-search-results.component';

describe('CitySearchResultsComponent', () => {
  let component: CitySearchResultsComponent;
  let fixture: ComponentFixture<CitySearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
