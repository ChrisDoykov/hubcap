import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle4Component } from './press-release-article4.component';

describe('PressReleaseArticle4Component', () => {
  let component: PressReleaseArticle4Component;
  let fixture: ComponentFixture<PressReleaseArticle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
