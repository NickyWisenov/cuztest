import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTransPageComponent } from './doc-trans-page.component';

describe('DocTransPageComponent', () => {
  let component: DocTransPageComponent;
  let fixture: ComponentFixture<DocTransPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTransPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTransPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
