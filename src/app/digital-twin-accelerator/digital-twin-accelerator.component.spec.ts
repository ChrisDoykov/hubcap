import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTwinAcceleratorComponent } from './digital-twin-accelerator.component';

describe('DigitalTwinAccelerator', () => {
  let component: DigitalTwinAcceleratorComponent;
  let fixture: ComponentFixture<DigitalTwinAcceleratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalTwinAcceleratorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTwinAcceleratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
