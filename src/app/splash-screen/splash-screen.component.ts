import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.scss"],
})
export class SplashScreenComponent implements OnInit {
  constructor() {}

  width: number;
  windowHeight: number;
  hidden: boolean = false;
  shown: boolean = false;
  startedAsApp: boolean = false;

  ngOnInit(): void {
    if (window.location.href.toString().includes("app=true")) {
      this.startedAsApp = true;
    }

    this.onResize();
    setTimeout(() => {
      this.hidden = true;
      setTimeout(() => {
        this.shown = true;
      }, 1000);
    }, 3000);
  }

  onResize() {
    this.width = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
}
