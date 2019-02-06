import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTranPriceCardComponent } from './doc-tran-price-card.component';

describe('DocTranPriceCardComponent', () => {
  let component: DocTranPriceCardComponent;
  let fixture: ComponentFixture<DocTranPriceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocTranPriceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocTranPriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
