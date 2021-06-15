import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-stories-list",
  templateUrl: "./success-stories-list.component.html",
  styleUrls: ["./success-stories-list.component.scss"],
})
export class SuccessStoriesListComponent implements OnInit {
  constructor() {}

  stories = [
    {
      title: "Networked Traffic Management",
      image: "../../assets/res/images/MicrosoftTeams-image.png",
      urlName: "success-story-sample",
      summary:
        "Some sample success story summary - can be both long-ish and very short too, we could also include the image ",
    },
  ];

  ngOnInit(): void {
    document.title = "Success Stories | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Success Stories";
    }
    this.onResize();
    this.checkPosition();
  }

  openModal(story) {
    const target = story.title;
    const $target = document.getElementById(target);

    $target.classList.toggle("is-active");
  }
  closeModal(story) {
    const target = story.title;
    const $target = document.getElementById(target);

    $target.classList.remove("is-active");
  }

  width: number;
  elements_slide_in_bottom: any;
  windowHeight: any;

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Success Stories";
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
