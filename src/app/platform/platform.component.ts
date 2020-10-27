import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-platform",
  templateUrl: "./platform.component.html",
  styleUrls: ["./platform.component.scss"],
})
export class PlatformComponent implements OnInit {
  constructor() {}

  width: number;

  ngOnInit(): void {
    document.title = "Platform | HUBCAP";
    document.getElementById("hero-title").textContent = "Platform";
    this.onResize();
  }

  onResize() {
    this.width = window.innerWidth;
  }
}
