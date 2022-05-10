import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-press-release-list",
  templateUrl: "./press-release-list.component.html",
  styleUrls: ["./press-release-list.component.scss"],
})
export class PressReleaseListComponent implements OnInit {
  constructor() {}

  releases = [
    // In order to edit the Press Release text look into press-release-article7.html in the press-release-articles folder

     {
       name: "Call #1.5 Press Release",
       description:
         "Check out the official Call #1.5 PULL press release to find out more about how it works and what each SME can gain from participating!",
      url: "press-releases/call1-5",
       urlname: "See press release",
     },

    // In order to edit the Press Release text look into press-release-article8.html in the press-release-articles folder

    // {
    //   name: "Call #2.2 Press Release",
    //   description:
    //     "Check out the official Call #2.2 EXPERIMENT press release to find out more about how it works and what each consortium of SMEs can gain from participating!",
    //   url: "press-releases/call2-2",
    //   urlname: "See press release",
    // },

    // In order to edit the Press Release text look into press-release-article6.html in the press-release-articles folder

    {
       name: "Call #1.4 Press Release",
       description:
         "Check out the official Call #1.4 PULL press release to find out more about how it works and what each SME can gain from participating!",
       url: "press-releases/call1-4",
       urlname: "See press release",
    },
    {
      name: "Call #3 Press Release",
      description:
        "Check out the official Call #3 INNOVATE press release to find out more about how it works and what each consortium of SMEs can gain from participating!",
      url: "press-releases/call3",
      urlname: "See press release",
    },
    {
      name: "Call #1.3 Press Release",
      description:
        "Check out the official Call #1.3 PULL press release to find out more about how it works and what each SME can gain from participating!",
      url: "press-releases/call1-3",
      urlname: "See press release",
    },
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
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Press Releases";
    }
    this.onResize();
    this.checkPosition();
  }

  width: number;
  elements_slide_in_bottom: any;
  windowHeight: any;

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Press Releases";
    }

    this.elements_slide_in_bottom = document.querySelectorAll(
      ".hidden-slide-in-bottom-press"
    );
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    if (this.elements_slide_in_bottom.length <= 0) {
      this.elements_slide_in_bottom = document.querySelectorAll(
        ".hidden-slide-in-bottom-press"
      );
    }
    for (let i = 0; i < this.elements_slide_in_bottom.length; i++) {
      let element = this.elements_slide_in_bottom[i];
      let positionFromTop =
        this.elements_slide_in_bottom[i].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-bottom");
        element.classList.remove("hidden-slide-in-bottom");
      }
    }
  }
}
