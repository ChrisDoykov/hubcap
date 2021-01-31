import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-newsletter-list",
  templateUrl: "./newsletter-list.component.html",
  styleUrls: ["./newsletter-list.component.scss"],
})
export class NewsletterListComponent implements OnInit {
  constructor() {}
  newsletters = [
    {
      month: "December 2020",
      description: `Find out what's new throughout the project, learn about new business opportunities, technological advances and more in our December 2020 newsletter!`,
      url: "../../assets/res/files/newsletters/Hubcap_Newsletter_Dec_2020.pdf",
      thumbnail: "../../assets/res/files/newsletters/thumbnails/N1_thumb.png",
      thumbnailAlt: "December 2020 Newsletter Front Page",
      modalTarget: "N1",
    },
  ];

  ngOnInit(): void {
    document.title = "Newsletters | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Newsletters";
    }
    this.onResize();
    this.checkPosition();
  }

  width: number;
  elements_slide_in_bottom: any;
  windowHeight: any;

  openModal(newsletter) {
    const target = newsletter.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.toggle("is-active");
  }
  closeModal(newsletter) {
    const target = newsletter.modalTarget;
    const $target = document.getElementById(target);

    $target.classList.remove("is-active");
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Newsletters";
    }

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
