import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrobuttonComponent } from './introbutton.component';

describe('IntrobuttonComponent', () => {
  let component: IntrobuttonComponent;
  let fixture: ComponentFixture<IntrobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
