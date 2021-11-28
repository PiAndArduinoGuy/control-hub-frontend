import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityControlsOutputComponent } from './security-controls-output.component';

describe('SecurityControlsOutputComponent', () => {
  let component: SecurityControlsOutputComponent;
  let fixture: ComponentFixture<SecurityControlsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityControlsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityControlsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
