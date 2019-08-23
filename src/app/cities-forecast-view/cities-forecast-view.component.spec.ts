import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesForecastViewComponent } from './cities-forecast-view.component';

describe('CitiesForecastViewComponent', () => {
  let component: CitiesForecastViewComponent;
  let fixture: ComponentFixture<CitiesForecastViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesForecastViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesForecastViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
