import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteInterpreterPriceCardComponent } from './on-site-interpreter-price-card.component';

describe('OnSiteInterpreterPriceCardComponent', () => {
  let component: OnSiteInterpreterPriceCardComponent;
  let fixture: ComponentFixture<OnSiteInterpreterPriceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnSiteInterpreterPriceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSiteInterpreterPriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
