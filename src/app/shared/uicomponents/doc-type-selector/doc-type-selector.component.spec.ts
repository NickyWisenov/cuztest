import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTypeSelectorComponent } from './doc-type-selector.component';

describe('DocTypeSelectorComponent', () => {
  let component: DocTypeSelectorComponent;
  let fixture: ComponentFixture<DocTypeSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTypeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
