import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehcileInsuranceComponent } from './vehcile-insurance.component';

describe('VehcileInsuranceComponent', () => {
  let component: VehcileInsuranceComponent;
  let fixture: ComponentFixture<VehcileInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehcileInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehcileInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
