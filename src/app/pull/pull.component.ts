import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-pull",
  templateUrl: "./pull.component.html",
  styleUrls: ["./pull.component.scss"],
  providers: [DeviceDetectorService],
})
export class PullComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  openApplyPage() {
    window.open("https://www.f6s.com/hubcap1-2pull/apply", "_blank");
  }

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  ngOnInit(): void {
    document.title = "Call #1 PULL | HUBCAP";
    document.getElementById("hero-title").textContent = "Call #1 PULL";
  }
}
