import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityBreachedHandlerComponent } from './security-breached-handler.component';

describe('SecurityBreachedHandlerComponent', () => {
  let component: SecurityBreachedHandlerComponent;
  let fixture: ComponentFixture<SecurityBreachedHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityBreachedHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityBreachedHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
