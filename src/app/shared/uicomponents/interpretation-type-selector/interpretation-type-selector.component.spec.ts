import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationTypeSelectorComponent } from './interpretation-type-selector.component';

describe('InterpretationTypeSelectorComponent', () => {
  let component: InterpretationTypeSelectorComponent;
  let fixture: ComponentFixture<InterpretationTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpretationTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretationTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
