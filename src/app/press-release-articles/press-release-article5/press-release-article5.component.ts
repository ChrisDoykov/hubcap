import { Component, OnInit } from "@angular/core";

@Component({
  selector: "press-release-article5",
  templateUrl: "./press-release-article5.component.html",
  styleUrls: ["./press-release-article5.component.scss"],
})
export class PressReleaseArticle5Component implements OnInit {
  width: number;
  constructor() {}

  ngOnInit(): void {
    document.title = "Press Release Call #3 INNOVATE | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent =
        "Press Release Call #3 INNOVATE";
    }
  }

  openModal(item) {
    const $target = document.getElementById(item);

    $target.classList.toggle("is-active");
  }
  closeModal(item) {
    const $target = document.getElementById(item);

    $target.classList.remove("is-active");
  }

  onResize() {
    this.width = window.innerWidth;
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent =
        "Press Release Call #3 INNOVATE";
    }
  }
}
