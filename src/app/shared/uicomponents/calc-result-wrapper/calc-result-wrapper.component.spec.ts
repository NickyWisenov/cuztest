import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcResultWrapperComponent } from './calc-result-wrapper.component';

describe('CalcResultWrapperComponent', () => {
  let component: CalcResultWrapperComponent;
  let fixture: ComponentFixture<CalcResultWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcResultWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcResultWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
