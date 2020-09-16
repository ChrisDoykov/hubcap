import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DihComponent } from './dih.component';

describe('DihComponent', () => {
  let component: DihComponent;
  let fixture: ComponentFixture<DihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
