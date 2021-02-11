import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoExpComponent } from './video-exp.component';

describe('VideoExpComponent', () => {
  let component: VideoExpComponent;
  let fixture: ComponentFixture<VideoExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
