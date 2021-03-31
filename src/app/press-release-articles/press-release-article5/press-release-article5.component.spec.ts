import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle5Component } from './press-release-article5.component';

describe('PressReleaseArticle5Component', () => {
  let component: PressReleaseArticle5Component;
  let fixture: ComponentFixture<PressReleaseArticle5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
