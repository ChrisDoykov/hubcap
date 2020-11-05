import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Webinar1_2Component } from "./webinar1_2.component";

describe("Webinar1.2Component", () => {
  let component: Webinar1_2Component;
  let fixture: ComponentFixture<Webinar1_2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Webinar1_2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Webinar1_2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
