import { Component, OnInit } from "@angular/core";

@Component({
  selector: "press-release-article4",
  templateUrl: "./press-release-article4.component.html",
  styleUrls: ["./press-release-article4.component.scss"],
})
export class PressReleaseArticle4Component implements OnInit {
  width: number;
  constructor() {}

  ngOnInit(): void {
    document.title = "Press Release Call #1.3 PULL | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent =
        "Press Release Call #1.3 PULL";
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
        "Press Release Call #1.3 PULL";
    }
  }
}
