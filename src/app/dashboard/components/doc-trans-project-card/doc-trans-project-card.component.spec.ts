import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTransProjectCardComponent } from './doc-trans-project-card.component';

describe('DocTransProjectCardComponent', () => {
  let component: DocTransProjectCardComponent;
  let fixture: ComponentFixture<DocTransProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTransProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTransProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
