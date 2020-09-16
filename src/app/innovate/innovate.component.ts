import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-experiment",
  templateUrl: "./innovate.component.html",
  styleUrls: ["./innovate.component.scss"],
  providers: [DeviceDetectorService],
})
export class InnovateComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  openApplyPage() {
    // window.open("https://www.f6s.com/hubcapcall1pull/apply", "_blank");
  }

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  ngOnInit(): void {
    document.title = "Call #3 INNOVATE | HUBCAP";
    document.getElementById("hero-title").textContent = "Call #3 INNOVATE";
  }
}
