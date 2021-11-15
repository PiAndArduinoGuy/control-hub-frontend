import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityControllerComponent } from './security-controller.component';

describe('SecurityControllerComponent', () => {
  let component: SecurityControllerComponent;
  let fixture: ComponentFixture<SecurityControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
