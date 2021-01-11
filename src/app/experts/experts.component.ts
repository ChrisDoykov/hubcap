import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experts",
  templateUrl: "./experts.component.html",
  styleUrls: ["./experts.component.scss"],
})
export class ExpertsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.title = "Call For Experts | HUBCAP";
    document.getElementById("hero-title").textContent = "Call For Experts";
  }

  openApplyPage() {
    window.open(
      "https://www.f6s.com/1callofexpertsexpressionofinterest/apply",
      "_blank"
    );
  }
}
