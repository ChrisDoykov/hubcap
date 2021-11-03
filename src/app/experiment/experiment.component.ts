import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-experiment",
  templateUrl: "./experiment.component.html",
  styleUrls: ["./experiment.component.scss"],
  providers: [DeviceDetectorService],
})
export class ExperimentComponent implements OnInit {
  width: number;
  constructor(private deviceService: DeviceDetectorService) {}

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  ngOnInit(): void {
    document.title = "Call #2 EXPERIMENT | HUBCAP";
    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call #2 EXPERIMENT";
    }
  }

  onResize() {
    this.width = window.innerWidth;

    if (document.getElementById("hero-title") !== null) {
      document.getElementById("hero-title").textContent = "Call #2 EXPERIMENT";
    }
  }

  openApplyPage() {
    window.open("https://www.f6s.com/hubcap-call-2.2-experiment/apply ", "_blank");
  }
}
