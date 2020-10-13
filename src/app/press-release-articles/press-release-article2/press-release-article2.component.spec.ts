import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle2Component } from './press-release-article2.component';

describe('PressReleaseArticle2Component', () => {
  let component: PressReleaseArticle2Component;
  let fixture: ComponentFixture<PressReleaseArticle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
