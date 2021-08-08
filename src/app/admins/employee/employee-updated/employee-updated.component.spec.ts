import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUpdatedComponent } from './employee-updated.component';

describe('EmployeeUpdatedComponent', () => {
  let component: EmployeeUpdatedComponent;
  let fixture: ComponentFixture<EmployeeUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
