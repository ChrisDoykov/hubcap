import { Component, OnInit } from "@angular/core";

@Component({
  selector: "press-release-article2",
  templateUrl: "./press-release-article2.component.html",
  styleUrls: ["./press-release-article2.component.scss"],
})
export class PressReleaseArticle2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.title = "Press Release Call #1.2 PULL | HUBCAP";
    document.getElementById("hero-title").textContent =
      "Press Release Call #1.2 PULL";
  }

  openModal(item) {
    const $target = document.getElementById(item);

    $target.classList.toggle("is-active");
  }
  closeModal(item) {
    const $target = document.getElementById(item);

    $target.classList.remove("is-active");
  }
}