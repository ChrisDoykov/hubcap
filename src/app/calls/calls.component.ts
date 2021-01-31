import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-calls",
  templateUrl: "./calls.component.html",
  styleUrls: ["./calls.component.scss"],
  providers: [DeviceDetectorService],
})
export class CallsComponent implements OnInit {
  width: number;
  constructor(private deviceService: DeviceDetectorService) {}

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  applyToCall(id) {
    switch (id) {
      case 0:
        window.location.href = "/calls/pull";
        break;
      case 1:
        window.location.href = "/calls/experiment";
        break;
      case 2:
        window.location.href = "/calls/innovate";
        break;
    }
  }

  ngOnInit(): void {
    document.title = "Open Calls | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Open Calls";
    }
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Open Calls";
    }
  }
}
