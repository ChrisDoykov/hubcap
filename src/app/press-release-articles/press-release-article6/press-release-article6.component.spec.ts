import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressReleaseArticle6Component } from './press-release-article6.component';

describe('PressReleaseArticle6Component', () => {
  let component: PressReleaseArticle6Component;
  let fixture: ComponentFixture<PressReleaseArticle6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressReleaseArticle6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressReleaseArticle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
