import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-press-release-article3",
  templateUrl: "./press-release-article3.component.html",
  styleUrls: ["./press-release-article3.component.scss"],
})
export class PressReleaseArticle3Component implements OnInit {
  width: number;
  constructor() {}
  ngOnInit(): void {
    document.title = "Press Release Call #2.1 EXPERIMENT | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent =
        "Press Release Call #2.1 EXP";
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
        "Press Release Call #2.1 EXP";
    }
  }
}
