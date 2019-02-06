import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteInterpreterComponent } from './on-site-interpreter.component';

describe('OnSiteInterpreterComponent', () => {
  let component: OnSiteInterpreterComponent;
  let fixture: ComponentFixture<OnSiteInterpreterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnSiteInterpreterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSiteInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
