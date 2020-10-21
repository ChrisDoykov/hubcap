import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  mobile = this.deviceService.isMobile();

  ngOnInit(): void {
    document.title = "Our Services | HUBCAP";
    document.getElementById("hero-title").textContent = "Services";
  }
}
