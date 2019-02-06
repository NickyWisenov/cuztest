import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSelectModalComponent } from './info-select-modal.component';

describe('InfoSelectModalComponent', () => {
  let component: InfoSelectModalComponent;
  let fixture: ComponentFixture<InfoSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
