import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineSelectorComponent } from './deadline-selector.component';

describe('DeadlineSelectorComponent', () => {
  let component: DeadlineSelectorComponent;
  let fixture: ComponentFixture<DeadlineSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadlineSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlineSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
