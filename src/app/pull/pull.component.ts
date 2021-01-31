import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-pull",
  templateUrl: "./pull.component.html",
  styleUrls: ["./pull.component.scss"],
  providers: [DeviceDetectorService],
})
export class PullComponent implements OnInit {
  width: number;
  constructor(private deviceService: DeviceDetectorService) {}

  openApplyPage() {
    window.open("https://www.f6s.com/hubcapcall1-2pull/apply", "_blank");
  }

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  ngOnInit(): void {
    document.title = "Call #1 PULL | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call #1 PULL";
    }
  }
  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call #1 PULL";
    }
  }
}
