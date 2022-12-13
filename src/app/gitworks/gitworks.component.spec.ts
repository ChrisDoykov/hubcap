import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitworksComponent } from './gitworks.component';

describe('GitworksComponent', () => {
  let component: GitworksComponent;
  let fixture: ComponentFixture<GitworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitworksComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
