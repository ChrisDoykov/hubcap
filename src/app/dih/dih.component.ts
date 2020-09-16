import { Component, OnInit } from "@angular/core";
import { SwiperOptions } from "swiper";

@Component({
  selector: "app-dih",
  templateUrl: "./dih.component.html",
  styleUrls: ["./dih.component.scss"],
})
export class DihComponent implements OnInit {
  constructor() {}

  width: number;
  elements_fade_in: any;
  elements_slide_in_left: any;
  elements_slide_in_right: any;
  windowHeight: any;

  config: SwiperOptions = {
    zoom: {
      toggle: true,
      minRatio: 0,
      maxRatio: 3,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    updateOnWindowResize: true,
    direction: "verticall",

    spaceBetween: 30,
  };

  hubs_images = [
    [
      "../../assets/res/images/grey_bg.jpg",
      "../../assets/res/images/grey_bg2.jpg",
      "../../assets/res/images/grey_bg3.jpg",
      "../../assets/res/images/grey_bg4.jpg",
    ],
  ];

  ngOnInit() {
    document.title = "Digital Innovation Hubs | HUBCAP";
    document.getElementById("hero-title").textContent =
      "Digital Innovation Hubs";

    this.onResize();
    this.checkPosition();
    this.prepareModals();
  }

  onResize() {
    this.width = window.innerWidth;

    this.elements_fade_in = document.querySelectorAll(".hidden-fade-in");
    this.elements_slide_in_left = document.querySelectorAll(
      ".hidden-slide-in-left"
    );
    this.elements_slide_in_right = document.querySelectorAll(
      ".hidden-slide-in-right"
    );
    this.windowHeight = window.innerHeight;
  }

  checkPosition() {
    for (let i = 0; i < this.elements_fade_in.length; i++) {
      let element = this.elements_fade_in[i];
      let positionFromTop = this.elements_fade_in[i].getBoundingClientRect()
        .top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-fade-in");
        element.classList.remove("hidden-fade-in");
      }
    }

    // Slide-in-Left
    for (let i = 0; i < this.elements_slide_in_left.length; i++) {
      let element = this.elements_slide_in_left[i];
      let positionFromTop = this.elements_slide_in_left[
        i
      ].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-left");
        element.classList.remove("hidden-slide-in-left");
      }
    }

    // Slide-in-Right
    for (let i = 0; i < this.elements_slide_in_right.length; i++) {
      let element = this.elements_slide_in_right[i];
      let positionFromTop = this.elements_slide_in_right[
        i
      ].getBoundingClientRect().top;

      if (positionFromTop - this.windowHeight <= 0) {
        element.classList.add("u-slide-in-right");
        element.classList.remove("hidden-slide-in-right");
      }
    }
  }

  prepareModals() {
    const $modalButtons = Array.prototype.slice.call(
      document.querySelectorAll(".modal-button"),
      0
    );
    const $closeModalButtons = Array.prototype.slice.call(
      document.querySelectorAll(".modal-close"),
      0
    );
    const $modalBackgrounds = Array.prototype.slice.call(
      document.querySelectorAll(".modal-background"),
      0
    );

    if ($modalButtons.length > 0) {
      $modalButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.dataset.target;
          const $target = document.getElementById(target);

          $target.classList.toggle("is-active");
        });
        $closeModalButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const $targets = document.querySelectorAll(".modal");
            $targets.forEach((target) => {
              target.classList.remove("is-active");
            });
          });
        });
        $modalBackgrounds.forEach((background) => {
          background.addEventListener("click", () => {
            const $targets = document.querySelectorAll(".modal");
            $targets.forEach((target) => {
              target.classList.remove("is-active");
            });
          });
        });
      });
    }
  }
}
