import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-press-release-list",
  templateUrl: "./press-release-list.component.html",
  styleUrls: ["./press-release-list.component.scss"],
})
export class PressReleaseListComponent implements OnInit {
  constructor() {}

  releases = [
    {
      name: "Call #2.1 Press Release",
      description:
        "Check out the official Call #2.1 EXPERIMENT press release to find out more about how it works and what each consortium of SMEs can gain from participating!",
      url: "press-releases/call2-1",
      urlname: "See press release",
    },
    {
      name: "Call #1.2 Press Release",
      description:
        "Check out the official Call #1.2 PULL press release to find out more about how it works and what each SME can gain from participating!",
      url: "press-releases/call1-2",
      urlname: "See press release",
    },
    {
      name: "Call #1.1 Press Release",
      description:
        "Check out the official Call #1.1 PULL press release to find out more about how it works and what each SME can gain from participating!",
      url: "press-releases/call1-1",
      urlname: "See press release",
    },
  ];

  ngOnInit(): void {
    document.title = "Press Releases | HUBCAP";
    document.getElementById("hero-title").textContent = "Press Releases";
    this.onResize();
    this.checkPosition();
  }

  width: number;
  elements_slide_in_bottom: any;
  windowHeight: any;

  onResize() {
    this.width = window.innerWidth;

    this.elements_slide_in_bottom = document.querySelectorAll(
      ".hidden-slide-in-bottom"
    );
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    if (this.elements_slide_in_bottom.length <= 0) {
      this.elements_slide_in_bottom = document.querySelectorAll(
        ".hidden-slide-in-bottom"
      );
    }
    for (let i = 0; i < this.elements_slide_in_bottom.length; i++) {
      let element = this.elements_slide_in_bottom[i];
      let positionFromTop = this.elements_slide_in_bottom[
        i
      ].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-bottom");
        element.classList.remove("hidden-slide-in-bottom");
      }
    }
  }
}
