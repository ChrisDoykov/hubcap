import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-experiment",
  templateUrl: "./experiment.component.html",
  styleUrls: ["./experiment.component.scss"],
  providers: [DeviceDetectorService],
})
export class ExperimentComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  openApplyPage() {
    // window.open("https://www.f6s.com/hubcapcall1pull/apply", "_blank");
  }

  mobile = this.deviceService.isMobile();
  desktop = this.deviceService.isDesktop();
  tablet = this.deviceService.isTablet();

  ngOnInit(): void {
    document.title = "Call #2 EXPERIMENT | HUBCAP";
    document.getElementById("hero-title").textContent = "Call #2 EXPERIMENT";
  }
}
