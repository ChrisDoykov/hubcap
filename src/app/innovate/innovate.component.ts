import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-experiment",
  templateUrl: "./innovate.component.html",
  styleUrls: ["./innovate.component.scss"],
  providers: [DeviceDetectorService],
})
export class InnovateComponent implements OnInit {
  width: number;
  constructor(private deviceService: DeviceDetectorService) {}

  openApplyPage() {
    window.open("https://www.f6s.com/call-3-innovate/apply ", "_blank");
  }

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  ngOnInit(): void {
    document.title = "Call #3 INNOVATE | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call #3 INNOVATE";
    }
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call #3 INNOVATE";
    }
  }
}
