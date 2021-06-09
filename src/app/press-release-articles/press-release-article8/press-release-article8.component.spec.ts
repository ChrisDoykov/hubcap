import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle8Component } from './press-release-article8.component';

describe('PressReleaseArticle8Component', () => {
  let component: PressReleaseArticle8Component;
  let fixture: ComponentFixture<PressReleaseArticle8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
