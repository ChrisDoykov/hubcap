import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleasesComponent } from './press-releases.component';

describe('PressReleasesComponent', () => {
  let component: PressReleasesComponent;
  let fixture: ComponentFixture<PressReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
