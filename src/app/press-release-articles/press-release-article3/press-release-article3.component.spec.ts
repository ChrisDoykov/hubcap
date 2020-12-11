import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle3Component } from './press-release-article3.component';

describe('PressReleaseArticle3Component', () => {
  let component: PressReleaseArticle3Component;
  let fixture: ComponentFixture<PressReleaseArticle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
