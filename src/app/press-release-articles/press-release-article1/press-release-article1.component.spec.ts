import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle1Component } from './press-release-article1.component';

describe('PressReleaseArticle1Component', () => {
  let component: PressReleaseArticle1Component;
  let fixture: ComponentFixture<PressReleaseArticle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
