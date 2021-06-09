import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle7Component } from './press-release-article7.component';

describe('PressReleaseArticle7Component', () => {
  let component: PressReleaseArticle7Component;
  let fixture: ComponentFixture<PressReleaseArticle7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
