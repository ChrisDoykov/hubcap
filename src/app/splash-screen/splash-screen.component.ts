import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-splash-screen",
  templateUrl: "./splash-screen.component.html",
  styleUrls: ["./splash-screen.component.scss"],
})
export class SplashScreenComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  width: number;
  windowHeight: number;
  hidden: boolean = false;
  shown: boolean = false;
  startedAsApp: boolean = false;

  ngOnInit(): void {
    if (
      window.location.href.toString().includes("app=true") &&
      this.deviceService.isMobile()
    ) {
      this.startedAsApp = true;
    }

    this.onResize();
    setTimeout(() => {
      this.hidden = true;
      setTimeout(() => {
        this.shown = true;
      }, 1000);
    }, 2000);
  }

  onResize() {
    this.width = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
}
