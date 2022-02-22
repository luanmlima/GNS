import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoboyRegistrationComponent } from './motoboy-registration.component';

describe('MotoboyRegistrationComponent', () => {
  let component: MotoboyRegistrationComponent;
  let fixture: ComponentFixture<MotoboyRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotoboyRegistrationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoboyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
