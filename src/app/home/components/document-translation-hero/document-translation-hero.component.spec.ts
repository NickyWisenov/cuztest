import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTranslationHeroComponent } from './document-translation-hero.component';

describe('DocumentTranslationHeroComponent', () => {
  let component: DocumentTranslationHeroComponent;
  let fixture: ComponentFixture<DocumentTranslationHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTranslationHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTranslationHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
