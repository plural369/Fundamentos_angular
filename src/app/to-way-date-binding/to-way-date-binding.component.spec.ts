import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWayDateBindingComponent } from './to-way-date-binding.component';

describe('ToWayDateBindingComponent', () => {
  let component: ToWayDateBindingComponent;
  let fixture: ComponentFixture<ToWayDateBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToWayDateBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToWayDateBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
