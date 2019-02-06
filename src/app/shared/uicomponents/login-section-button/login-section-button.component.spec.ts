import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSectionButtonComponent } from './login-section-button.component';

describe('LoginSectionButtonComponent', () => {
  let component: LoginSectionButtonComponent;
  let fixture: ComponentFixture<LoginSectionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSectionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
