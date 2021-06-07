import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experts",
  templateUrl: "./experts.component.html",
  styleUrls: ["./experts.component.scss"],
})
export class ExpertsComponent implements OnInit {
  width: number;
  constructor() {}

  ngOnInit(): void {
    document.title = "Call For Experts | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call For Experts";
    }
  }

  openApplyPage() {
    window.open(
      "https://www.f6s.com/innovate-call-for-expression-of-interest/apply",
      "_blank"
    );
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call For Experts";
    }
  }
}
