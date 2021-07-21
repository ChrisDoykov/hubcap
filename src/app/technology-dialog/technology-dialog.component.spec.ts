import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDialogComponent } from './technology-dialog.component';

describe('TechnologyDialogComponent', () => {
  let component: TechnologyDialogComponent;
  let fixture: ComponentFixture<TechnologyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
