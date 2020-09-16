import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehcnologiesComponent } from './tehcnologies.component';

describe('TehcnologiesComponent', () => {
  let component: TehcnologiesComponent;
  let fixture: ComponentFixture<TehcnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TehcnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TehcnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
