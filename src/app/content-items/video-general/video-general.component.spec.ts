import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGeneralComponent } from './video-general.component';

describe('VideoGeneralComponent', () => {
  let component: VideoGeneralComponent;
  let fixture: ComponentFixture<VideoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
