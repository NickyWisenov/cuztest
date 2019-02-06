import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteProjectCardComponent } from './on-site-project-card.component';

describe('OnSiteProjectCardComponent', () => {
  let component: OnSiteProjectCardComponent;
  let fixture: ComponentFixture<OnSiteProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnSiteProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnSiteProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
