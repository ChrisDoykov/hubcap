import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoriesListComponent } from './success-stories-list.component';

describe('SuccessStoriesListComponent', () => {
  let component: SuccessStoriesListComponent;
  let fixture: ComponentFixture<SuccessStoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessStoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
